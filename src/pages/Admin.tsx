import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, writeBatch, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Loader2, Users, Download, ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WaitlistUser {
  id: string;
  walletAddress: string;
  xHandle: string;
  tgHandle: string;
  discordHandle: string;
  timestamp: any;
  hashpower?: number;
}

const Admin = () => {
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isGranting, setIsGranting] = useState(false);
  const [grantSuccess, setGrantSuccess] = useState(false);
  
  // Passcode Protection State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPasscode, setEnteredPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchUsers = async () => {
      try {
        const q = query(collection(db, 'waitlist'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedUsers: WaitlistUser[] = [];
        querySnapshot.forEach((doc) => {
          fetchedUsers.push({ id: doc.id, ...doc.data() } as WaitlistUser);
        });
        setUsers(fetchedUsers);
      } catch (err: any) {
        console.error("Error fetching users:", err);
        setError(err.message || "Failed to fetch users. Please check your Firestore security rules.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [isAuthenticated]);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPasscode === '203040') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
      setEnteredPasscode('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex items-center justify-center p-6">
        <div className="w-full max-w-md glass p-8 rounded-3xl border border-white/10 text-center">
          <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="text-brand-primary" size={32} />
          </div>
          <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
          <p className="text-white/50 mb-8 text-sm">Enter the secure passcode to access the dashboard.</p>
          
          <form onSubmit={handlePasscodeSubmit} className="space-y-4">
            <input 
              type="password"
              value={enteredPasscode}
              onChange={(e) => setEnteredPasscode(e.target.value)}
              placeholder="Enter Passcode"
              className={`w-full bg-black/50 border ${passcodeError ? 'border-red-500' : 'border-white/10 focus:border-brand-primary/50'} rounded-xl px-4 py-3 text-center text-xl tracking-[0.5em] focus:outline-none transition-colors`}
              autoFocus
            />
            {passcodeError && (
              <p className="text-red-500 text-xs">Incorrect passcode. Access denied.</p>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>
          
          <Link to="/" className="inline-block mt-6 text-white/30 hover:text-white text-xs transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const exportToCSV = () => {
    const headers = ['Wallet Address', 'X Handle', 'Telegram Handle', 'Discord Handle', 'Date Joined'];
    const csvContent = [
      headers.join(','),
      ...users.map(user => {
        const date = user.timestamp?.toDate ? user.timestamp.toDate().toLocaleString() : 'N/A';
        return `${user.walletAddress},${user.xHandle},${user.tgHandle},${user.discordHandle},"${date}"`;
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `waitlist_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const grantHashpower = async () => {
    if (users.length === 0) return;
    if (!window.confirm("Are you sure you want to grant 0.004 hashpower to ALL users?")) return;
    
    setIsGranting(true);
    setGrantSuccess(false);
    setError('');

    try {
      // Firestore batches have a limit of 500 operations.
      const chunkSize = 500;
      for (let i = 0; i < users.length; i += chunkSize) {
        const chunk = users.slice(i, i + chunkSize);
        const batch = writeBatch(db);
        
        chunk.forEach(user => {
          const userRef = doc(db, 'waitlist', user.id);
          batch.update(userRef, { 
            hashpower: 0.004,
            hashpowerGrantedAt: serverTimestamp()
          });
        });
        
        await batch.commit();
      }

      // Update local state to reflect changes without reloading
      setUsers(users.map(u => ({ ...u, hashpower: 0.004 })));
      setGrantSuccess(true);
      setTimeout(() => setGrantSuccess(false), 5000);
    } catch (err: any) {
      console.error("Error granting hashpower:", err);
      setError(err.message || "Failed to grant hashpower. Please check your Firestore security rules.");
    } finally {
      setIsGranting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors text-sm">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Users className="text-brand-primary" />
              Waitlist Admin
            </h1>
            <p className="text-white/50 mt-2">Manage and export your genesis mining waitlist registrations.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={grantHashpower}
              disabled={users.length === 0 || isGranting}
              className="flex items-center gap-2 px-4 py-2 bg-brand-primary/20 text-brand-primary hover:bg-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-sm font-bold border border-brand-primary/30"
            >
              {isGranting ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} />}
              {isGranting ? 'Granting...' : 'Grant 0.004 Hashpower'}
            </button>
            <button 
              onClick={exportToCSV}
              disabled={users.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Export CSV
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors text-sm font-medium border border-red-500/20"
            >
              Logout
            </button>
          </div>
        </div>

        {grantSuccess && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl mb-8 flex items-center gap-3">
            <Zap size={20} />
            <p className="font-bold">Successfully granted 0.004 hashpower to all users!</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8">
            <p className="font-bold mb-1">Error loading data</p>
            <p className="text-sm">{error}</p>
            <p className="text-sm mt-2 text-white/70">
              Note: You must update your Firestore Security Rules to allow 'list' operations to view this dashboard.
            </p>
          </div>
        )}

        <div className="glass rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/10 text-white/60">
                <tr>
                  <th className="px-6 py-4 font-medium">Wallet Address</th>
                  <th className="px-6 py-4 font-medium">X (Twitter)</th>
                  <th className="px-6 py-4 font-medium">Telegram</th>
                  <th className="px-6 py-4 font-medium">Discord</th>
                  <th className="px-6 py-4 font-medium">Hashpower</th>
                  <th className="px-6 py-4 font-medium">Date Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <Loader2 className="w-8 h-8 animate-spin text-brand-primary mx-auto mb-4" />
                      <p className="text-white/50">Loading waitlist data...</p>
                    </td>
                  </tr>
                ) : users.length === 0 && !error ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-white/50">
                      No users have joined the waitlist yet.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-white/80">{user.walletAddress}</td>
                      <td className="px-6 py-4 text-brand-primary">{user.xHandle}</td>
                      <td className="px-6 py-4 text-[#2AABEE]">{user.tgHandle}</td>
                      <td className="px-6 py-4 text-[#5865F2]">{user.discordHandle}</td>
                      <td className="px-6 py-4">
                        {user.hashpower ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-brand-primary/20 text-brand-primary text-xs font-bold">
                            <Zap size={12} /> {user.hashpower}
                          </span>
                        ) : (
                          <span className="text-white/30 text-xs">None</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-white/50">
                        {user.timestamp?.toDate ? user.timestamp.toDate().toLocaleString() : 'Just now'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {!loading && !error && (
            <div className="px-6 py-4 bg-white/5 border-t border-white/10 text-sm text-white/50 flex justify-between items-center">
              <span>Total Registrations: <strong className="text-white">{users.length}</strong></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
