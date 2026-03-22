import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Lock,
  TrendingUp, 
  Users, 
  ArrowRight,
  Hash,
  ChevronLeft,
  ChevronRight,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const Whitepaper = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const rewardData = [
    { name: 'Delegators', value: 80, color: '#000000' },
    { name: 'Node Operators', value: 18.6, color: '#666666' },
    { name: 'Protocol Fee', value: 1.4, color: '#AAAAAA' },
  ];

  const halvingData = [
    { epoch: '1-65', rewards: 100 },
    { epoch: '66-130', rewards: 50 },
    { epoch: '131-195', rewards: 25 },
    { epoch: '196-260', rewards: 12.5 },
    { epoch: '261-325', rewards: 6.25 },
    { epoch: '326-390', rewards: 3.125 },
  ];

  const pages = [
    // Page 1: Title & Summary
    {
      title: "01. Executive Summary",
      content: (
        <div className="space-y-8">
          <div className="pb-8 mb-8 border-b border-black/10">
            <p className="text-sm font-mono uppercase tracking-[0.3em] text-black/40 mb-4">Technical Specification // V1.0.4</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-4">Exnus Protocol</h1>
            <p className="text-lg text-black/60 italic mt-1">Hardware-backed, On-chain Verified Staking Infrastructure on Solana</p>
          </div>
          <div className="space-y-6 text-lg font-serif leading-relaxed text-black/80">
            <p>Exnus Protocol represents a next-generation staking and reward infrastructure built on the Solana blockchain. It is designed to unify staking and rewards into a transparent, efficient, and highly scalable system for all participants.</p>
            <div className="p-8 bg-black text-white italic text-xl leading-relaxed rounded-lg shadow-xl">
              "At its core are XNodes — specialized hardware-based nodes that execute complex computations off-chain while being verified on-chain. This hybrid model ensures high-performance operations while maintaining absolute transparency."
            </div>
            <p>Exnus aims to redefine the staking experience by providing dynamic reward distribution, user-aligned incentives, and a scalable infrastructure that builds long-term trust.</p>
          </div>
        </div>
      )
    },
    // Page 2: Market Overview
    {
      title: "02. Market Overview",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-black/20 p-8 rounded-lg bg-black/5">
              <p className="text-xs font-bold uppercase text-black/50 mb-2 tracking-widest">Total Staked (2026)</p>
              <p className="text-4xl font-serif font-bold">$150B+</p>
            </div>
            <div className="border border-black/20 p-8 rounded-lg bg-black/5">
              <p className="text-xs font-bold uppercase text-black/50 mb-2 tracking-widest">Solana Wallets</p>
              <p className="text-4xl font-serif font-bold">4M+</p>
            </div>
          </div>
          <div className="space-y-6 text-lg font-serif leading-relaxed text-black/80">
            <h4 className="font-sans font-bold uppercase tracking-widest text-black text-sm border-b border-black/10 pb-2">2.1 Market Barriers</h4>
            <p>The current staking landscape faces several significant hurdles that prevent widespread adoption:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>High technical barriers that exclude retail users from participating effectively.</li>
              <li>Dominance by centralized validators, which compromises network decentralization.</li>
              <li>Opaque and non-automated reward systems that lack clarity for delegators.</li>
            </ul>
            <h4 className="font-sans font-bold uppercase tracking-widest text-black mt-8 text-sm border-b border-black/10 pb-2">2.2 Opportunities</h4>
            <p className="italic">Exnus is strategically positioned to unlock these opportunities by combining off-chain hardware execution with rigorous on-chain verification, providing predictable payouts and full clarity for every user.</p>
          </div>
        </div>
      )
    },
    // Page 3: Problems Solved
    {
      title: "03. Problems Solved",
      content: (
        <div className="space-y-8">
          <p className="text-lg font-serif text-black/80 leading-relaxed">The Exnus Protocol addresses critical inefficiencies in the current blockchain ecosystem through innovative hardware and software integration:</p>
          <div className="space-y-4">
            {[
              { p: "Inefficient on-chain execution", s: "By utilizing off-chain hardware execution via XNodes, we ensure that the network remains scalable and responsive even under high load." },
              { p: "Limited user engagement", s: "Our dynamic, epoch-based reward system is automatically distributed, ensuring that users are consistently incentivized to participate." },
              { p: "Opaque reward distribution", s: "Node uptime is tracked with per-second precision, and rewards are calculated transparently at the end of each epoch." },
              { p: "Validator centralization", s: "XNodes allow for broader participation across the network, ensuring that incentives remain aligned with the community." }
            ].map((item, i) => (
              <div key={i} className="bg-black/5 p-6 rounded-lg border border-black/10">
                <p className="font-sans font-bold text-sm mb-2 uppercase tracking-widest text-black">{item.p}</p>
                <p className="text-base font-serif text-black/70 italic leading-relaxed">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Page 4: Architecture (XNode)
    {
      title: "04. Architecture: XNode",
      content: (
        <div className="space-y-8">
          <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-black border-b border-black/10 pb-2">4.1 XNode Overview</h4>
          <p className="text-lg font-serif text-black/80 leading-relaxed">XNodes are high-performance hardware units that execute complex logic off-chain to maintain speed. Every action taken by an XNode is verified on the Solana blockchain using cryptographic proofs, ensuring that performance never comes at the cost of security.</p>
          <div className="p-12 bg-black/5 rounded-xl border border-black/10 flex flex-col items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Fig 1.1: System Flow Diagram</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-black/10 flex items-center justify-center">
                <Cpu size={24} className="text-black" />
              </div>
              <ArrowRight size={20} className="text-black/30" />
              <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-black/10 flex items-center justify-center">
                <Lock size={24} className="text-black" />
              </div>
              <ArrowRight size={20} className="text-black/30" />
              <div className="w-16 h-16 bg-black rounded-xl shadow-lg flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-black/10 flex items-center justify-center">
                <ShieldCheck size={24} className="text-black" />
              </div>
              <ArrowRight size={20} className="text-black/30" />
              <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-black/10 flex items-center justify-center">
                <TrendingUp size={24} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Page 5: Reward Mechanics
    {
      title: "05. Reward Mechanics",
      content: (
        <div className="space-y-8">
          <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-black border-b border-black/10 pb-2">5.1 Distribution Logic</h4>
          <div className="space-y-4 text-lg font-serif text-black/80 leading-relaxed">
            <p>XNode operators earn commissions from delegators' rewards each epoch. This is the <strong>only way</strong> node operators earn rewards for providing infrastructure to support the network.</p>
            <p>Node operators pay the protocol fee for each epoch reward distribution directly from the commissions they earn from delegators' rewards.</p>
            <p>Node operators can set their commissions from <strong>0% to 20%</strong> from each epoch's rewards, which are accumulated dynamically based on the node's uptime. A node starts accumulating rewards <strong>only when there are active delegators</strong> on that specific node.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-base font-serif text-black/80 bg-white p-6 rounded-lg border border-black/10 shadow-sm mt-8">
            <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"/> 14-day Epoch cycles</p>
            <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"/> Uptime tracked per second</p>
            <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"/> Protocol fee paid by operator</p>
            <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"/> 0-20% Operator commission</p>
          </div>
        </div>
      )
    },
    // Page 6: Technical Components
    {
      title: "06. Technical Components",
      content: (
        <div className="space-y-8">
          <p className="text-lg font-serif text-black/80 leading-relaxed">The Exnus ecosystem is comprised of several core technical modules that work in harmony to provide a seamless staking experience:</p>
          <div className="border border-black/20 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-black text-white uppercase font-mono tracking-widest">
                <tr>
                  <th className="p-4 border-r border-white/20">Component</th>
                  <th className="p-4">Function</th>
                </tr>
              </thead>
              <tbody className="font-serif text-base bg-white">
                {[
                  { c: "XNode Hardware", f: "Executes off-chain tasks and tracks uptime." },
                  { c: "Verification Engine", f: "Verifies cryptographic proofs on-chain." },
                  { c: "Delegation Module", f: "Manages SPL-based staking and delegation." },
                  { c: "Reward Engine", f: "Calculates and distributes epoch rewards." }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/10 last:border-0 hover:bg-black/5 transition-colors">
                    <td className="p-4 font-bold border-r border-black/10">{row.c}</td>
                    <td className="p-4 italic text-black/70">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-mono text-black/40 uppercase tracking-[0.3em] mt-4 text-center">Solana SPL // Rust // Cryptographic Proofs</p>
        </div>
      )
    },
    // Page 7: Use Cases & Landscape
    {
      title: "07. Ecosystem",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <p className="font-sans font-bold text-sm uppercase mb-3 tracking-widest">Delegators</p>
              <p className="text-base font-serif text-black/70 leading-relaxed">Users can delegate their tokens to trusted XNodes to earn dynamic rewards with full transparency.</p>
            </div>
            <div className="border-l-4 border-black pl-6 py-2">
              <p className="font-sans font-bold text-sm uppercase mb-3 tracking-widest">Operators</p>
              <p className="text-base font-serif text-black/70 leading-relaxed">Operators provide the hardware infrastructure, earning commissions while securing the network.</p>
            </div>
          </div>
          <div className="p-8 bg-black/5 rounded-xl border border-black/10 mt-8">
            <h4 className="text-sm font-sans font-bold uppercase mb-6 tracking-widest border-b border-black/10 pb-2">Competitive Edge</h4>
            <div className="grid grid-cols-2 gap-8 text-base font-serif">
              <div>
                <p className="font-bold mb-2 text-black">Traditional Staking</p>
                <p className="text-black/70 leading-relaxed">Often limited to on-chain execution, which can be slow and lacks full transparency for retail users.</p>
              </div>
              <div>
                <p className="font-bold mb-2 text-black">Exnus Protocol</p>
                <p className="text-black/70 leading-relaxed">Utilizes hybrid execution to provide high performance while maintaining delegator-aligned incentives.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Page 8: Market Strategy
    {
      title: "08. Market Strategy",
      content: (
        <div className="space-y-8 font-serif text-lg text-black/80">
          <div className="space-y-4">
            <h4 className="font-sans font-bold uppercase tracking-widest text-black text-sm border-b border-black/10 pb-2">Engagement & Education</h4>
            <p className="leading-relaxed">We are committed to building a strong community through competitive leaderboards, early adopter rewards, and comprehensive educational resources for both stakers and operators.</p>
          </div>
        </div>
      )
    },
    // Page 9: Tokenomics
    {
      title: "09. Token & Economic Model",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="h-80 border border-black/10 rounded-xl p-6 bg-white shadow-sm flex flex-col">
              <p className="text-xs font-sans font-bold uppercase text-center mb-4 tracking-widest">Reward Distribution</p>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={rewardData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value" label>
                      {rewardData.map((e, i) => <Cell key={i} fill={e.color} stroke="#fff" strokeWidth={2} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="h-80 border border-black/10 rounded-xl p-6 bg-white shadow-sm flex flex-col">
              <p className="text-xs font-sans font-bold uppercase text-center mb-4 tracking-widest">Epoch Reward Halving</p>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={halvingData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="epoch" fontSize={10} axisLine={false} tickLine={false} interval={0} angle={-45} textAnchor="end" height={40} />
                    <YAxis fontSize={10} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} formatter={(value) => [`${value}%`, 'Rewards']} />
                    <Bar dataKey="rewards" fill="#000" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="text-lg font-serif text-black/80 leading-relaxed space-y-6">
            <p>Each epoch has a fixed maximum reward pool (cap). After each 65-epoch cycle, the pool is halved to manage inflation over a <strong className="text-black">15-year (390-epoch)</strong> period. Each epoch lasts for exactly <strong className="text-black">14 days</strong>.</p>
            <div className="bg-black/5 p-6 rounded-lg border border-black/10 text-sm font-mono italic space-y-2">
              <p>• Epochs 1–65: 100% Pool</p>
              <p>• Epochs 66–130: 50% Pool</p>
              <p>• Epochs 131–195: 25% Pool</p>
              <p>• Epochs 196–260: 12.5% Pool</p>
              <p>• Epochs 261–325: 6.25% Pool</p>
              <p>• Epochs 326–390: 3.125% Pool</p>
            </div>
            <p>Delegators receive their share from the epoch pool based on their <strong className="text-black">delegated amount</strong>, <strong className="text-black">node uptime</strong>, and after the <strong className="text-black">node operator commission</strong> is deducted.</p>
          </div>
        </div>
      )
    },
    // Page 10: Future & Conclusion
    {
      title: "10. Conclusion",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {["Advanced Analytics", "Cross-chain Support", "DAO Governance", "Protocol Optimization"].map((f, i) => (
              <div key={i} className="bg-black/5 border border-black/10 p-4 rounded-lg text-center text-xs font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-default">{f}</div>
            ))}
          </div>
          <div className="p-8 border-l-4 border-black bg-white shadow-sm font-serif text-xl italic leading-relaxed text-black/80 mt-8">
            Exnus Protocol is dedicated to delivering a scalable, transparent, and high-performance staking ecosystem. By bridging the gap between hardware-backed execution and on-chain security, we are building the trust-minimized infrastructure required for the future of the Solana network.
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1 < pages.length ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : 0));

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-primary/30 flex flex-col items-center py-6 px-4 relative overflow-hidden">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors group z-50 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Document Container */}
      <div className="w-full max-w-[850px] relative mt-16 flex-1 flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#fafafa] shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-sm w-full flex flex-col relative overflow-hidden text-[#1A1A1A] aspect-auto md:aspect-[1/1.414] min-h-[80vh]"
          >
            {/* Page Content */}
            <div className="w-full h-full p-8 xl:p-14 flex flex-col relative">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-black/10">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-black/40">Exnus Protocol</span>
                <span className="text-xs font-mono text-black/40 bg-black/5 px-3 py-1 rounded-full">PAGE {currentPage + 1} OF {pages.length}</span>
              </div>

              <h3 className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-black/50 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center"><Hash size={14} className="text-black" /></span>
                {pages[currentPage].title}
              </h3>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 pb-4">
                {pages[currentPage].content}
              </div>
            </div>

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 px-4 w-full">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group bg-white/5 backdrop-blur-sm disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2 flex-wrap justify-center max-w-[60%]">
            {pages.map((_, i) => (
              <button
                key={i} 
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all ${currentPage === i ? 'bg-brand-primary w-6' : 'bg-white/20 w-2 hover:bg-white/50'}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            disabled={currentPage >= pages.length - 1}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group bg-white/5 backdrop-blur-sm disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Whitepaper;

