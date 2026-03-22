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
  ArrowLeft as ArrowLeftIcon,
  Hash,
  ChevronLeft,
  ChevronRight,
  FileText,
  PieChart as PieChartIcon,
  BarChart3,
  CheckCircle2,
  Info,
  Globe,
  Database,
  Zap
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
  Cell
} from 'recharts';

const Whitepaper = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="space-y-4">
          <div className="pb-4 mb-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 mb-1">Technical Specification // V1.0.4</p>
            <h1 className="text-3xl font-serif font-bold tracking-tight">Exnus Protocol</h1>
            <p className="text-[11px] text-black/60 italic mt-1">Hardware-backed, On-chain Verified Staking Infrastructure on Solana</p>
          </div>
          <div className="space-y-3 text-[13px] font-serif leading-relaxed">
            <p>Exnus Protocol represents a next-generation staking and reward infrastructure built on the Solana blockchain. It is designed to unify staking and rewards into a transparent, efficient, and highly scalable system for all participants.</p>
            <div className="p-4 bg-black text-white italic text-[12px] leading-relaxed">
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
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-black p-4">
              <p className="text-[8px] font-bold uppercase text-black/40 mb-1">Total Staked (2026)</p>
              <p className="text-2xl font-serif font-bold">$150B+</p>
            </div>
            <div className="border border-black p-4">
              <p className="text-[8px] font-bold uppercase text-black/40 mb-1">Solana Wallets</p>
              <p className="text-2xl font-serif font-bold">4M+</p>
            </div>
          </div>
          <div className="space-y-3 text-[12px] font-serif leading-relaxed">
            <h4 className="font-bold uppercase tracking-tighter text-black text-xs">2.1 Market Barriers</h4>
            <p className="opacity-70">The current staking landscape faces several significant hurdles that prevent widespread adoption:</p>
            <ul className="space-y-1 list-disc pl-4 opacity-70">
              <li>High technical barriers that exclude retail users from participating effectively.</li>
              <li>Dominance by centralized validators, which compromises network decentralization.</li>
              <li>Opaque and non-automated reward systems that lack clarity for delegators.</li>
            </ul>
            <h4 className="font-bold uppercase tracking-tighter text-black mt-4 text-xs">2.2 Opportunities</h4>
            <p className="opacity-70 italic">Exnus is strategically positioned to unlock these opportunities by combining off-chain hardware execution with rigorous on-chain verification, providing predictable payouts and full clarity for every user.</p>
          </div>
        </div>
      )
    },
    // Page 3: Problems Solved
    {
      title: "03. Problems Solved",
      content: (
        <div className="space-y-4">
          <p className="text-[12px] font-serif opacity-70">The Exnus Protocol addresses critical inefficiencies in the current blockchain ecosystem through innovative hardware and software integration:</p>
          <div className="space-y-2">
            {[
              { p: "Inefficient on-chain execution", s: "By utilizing off-chain hardware execution via XNodes, we ensure that the network remains scalable and responsive even under high load." },
              { p: "Limited user engagement", s: "Our dynamic, epoch-based reward system is automatically distributed, ensuring that users are consistently incentivized to participate." },
              { p: "Opaque reward distribution", s: "Node uptime is tracked with per-second precision, and rewards are calculated transparently at the end of each epoch." },
              { p: "Validator centralization", s: "XNodes allow for broader participation across the network, ensuring that incentives remain aligned with the community." }
            ].map((item, i) => (
              <div key={i} className="bg-black/5 p-3">
                <p className="font-bold text-[10px] mb-1 uppercase tracking-tighter">{item.p}</p>
                <p className="text-[11px] font-serif opacity-70 italic leading-relaxed">{item.s}</p>
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
        <div className="space-y-4">
          <h4 className="text-[12px] font-bold uppercase tracking-tighter text-black">4.1 XNode Overview</h4>
          <p className="text-[12px] font-serif opacity-70 leading-relaxed">XNodes are high-performance hardware units that execute complex logic off-chain to maintain speed. Every action taken by an XNode is verified on the Solana blockchain using cryptographic proofs, ensuring that performance never comes at the cost of security.</p>
          <div className="p-6 bg-white flex flex-col items-center gap-4">
            <p className="text-[8px] font-bold uppercase tracking-widest text-black/30 mb-1">Fig 1.1: System Flow Diagram</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-black flex items-center justify-center">
                <Cpu size={16} />
              </div>
              <ArrowRight size={12} className="text-black/20" />
              <div className="w-10 h-10 border border-black flex items-center justify-center"><Lock size={16} /></div>
              <ArrowRight size={12} className="text-black/20" />
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <Database size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-black flex items-center justify-center"><ShieldCheck size={16} /></div>
              <ArrowRight size={12} className="text-black/20" />
              <div className="w-10 h-10 border border-black flex items-center justify-center"><TrendingUp size={16} /></div>
            </div>
          </div>
        </div>
      )
    },
    // Page 5: Reward Mechanics
    {
      title: "04. Reward Mechanics",
      content: (
        <div className="space-y-4">
          <h4 className="text-[12px] font-bold uppercase tracking-tighter text-black">4.2 Distribution Logic</h4>
          <p className="text-[12px] font-serif opacity-70 leading-relaxed">The protocol uses a transparent formula to calculate rewards based on node performance and total network uptime. This ensures that operators are rewarded fairly for their contributions.</p>
          <div className="space-y-4 font-mono text-[10px] italic py-2">
            <div>
              <p className="text-black/40 mb-1"># Node Reward Formula</p>
              <p className="text-black bg-black/5 p-2">R_node = (Uptime_node / Uptime_global) * Pool_epoch</p>
            </div>
            <div>
              <p className="text-black/40 mb-1"># Delegator Distribution</p>
              <p className="text-black bg-black/5 p-2">Reward_i = (Stake_i / Total_Stake) * (R_node - Commission)</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-serif opacity-70">
            <p>• 14-day Epoch cycles</p>
            <p>• Uptime tracked per second</p>
            <p>• 1.4% Protocol fee</p>
            <p>• 0-20% Operator commission</p>
          </div>
        </div>
      )
    },
    // Page 6: Technical Components
    {
      title: "05. Technical Components",
      content: (
        <div className="space-y-4">
          <p className="text-[12px] font-serif opacity-70">The Exnus ecosystem is comprised of several core technical modules that work in harmony to provide a seamless staking experience:</p>
          <div className="border border-black">
            <table className="w-full text-left text-[10px] border-collapse">
              <thead className="bg-black text-white uppercase font-mono">
                <tr>
                  <th className="p-2 border-r border-white/20">Component</th>
                  <th className="p-2">Function</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                {[
                  { c: "XNode Hardware", f: "Executes off-chain tasks and tracks uptime." },
                  { c: "Verification Engine", f: "Verifies cryptographic proofs on-chain." },
                  { c: "Delegation Module", f: "Manages SPL-based staking and delegation." },
                  { c: "Reward Engine", f: "Calculates and distributes epoch rewards." }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/10">
                    <td className="p-2 font-bold border-r border-black/10">{row.c}</td>
                    <td className="p-2 italic">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[9px] font-mono opacity-50 uppercase tracking-widest mt-2">Solana SPL // Rust // Cryptographic Proofs</p>
        </div>
      )
    },
    // Page 7: Use Cases & Landscape
    {
      title: "06-07. Ecosystem",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-2 border-black pl-3 py-1">
              <p className="font-bold text-[10px] uppercase mb-1">Delegators</p>
              <p className="text-[11px] font-serif opacity-70 leading-relaxed">Users can delegate their tokens to trusted XNodes to earn dynamic rewards with full transparency.</p>
            </div>
            <div className="border-l-2 border-black pl-3 py-1">
              <p className="font-bold text-[10px] uppercase mb-1">Operators</p>
              <p className="text-[11px] font-serif opacity-70 leading-relaxed">Operators provide the hardware infrastructure, earning commissions while securing the network.</p>
            </div>
          </div>
          <div className="p-4 bg-black/5">
            <h4 className="text-[10px] font-bold uppercase mb-2">Competitive Edge</h4>
            <div className="grid grid-cols-2 gap-4 text-[11px] font-serif">
              <div>
                <p className="font-bold mb-1">Traditional Staking</p>
                <p className="opacity-60 leading-relaxed">Often limited to on-chain execution, which can be slow and lacks full transparency for retail users.</p>
              </div>
              <div>
                <p className="font-bold mb-1">Exnus Protocol</p>
                <p className="opacity-60 leading-relaxed">Utilizes hybrid execution to provide high performance while maintaining delegator-aligned incentives.</p>
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
        <div className="space-y-4 font-serif text-[12px]">
          <div className="space-y-2">
            <h4 className="font-bold uppercase tracking-tighter text-black text-xs">Engagement & Education</h4>
            <p className="opacity-70 leading-relaxed">We are committed to building a strong community through competitive leaderboards, early adopter rewards, and comprehensive educational resources for both stakers and operators.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold uppercase tracking-tighter text-black text-xs">Launch Approach</h4>
            <p className="opacity-70">Our roadmap is divided into three strategic phases to ensure a stable and successful rollout:</p>
            <div className="space-y-2 text-[10px] font-mono">
              <p className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full" /> PHASE 01 // TESTNET DEPLOYMENT</p>
              <p className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full" /> PHASE 02 // MAINNET STAKING LAUNCH</p>
              <p className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full" /> PHASE 03 // WALLET INTEGRATIONS</p>
            </div>
          </div>
        </div>
      )
    },
    // Page 9: Tokenomics
    {
      title: "09. Token & Economic Model",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-28 border border-black/5 p-2">
              <p className="text-[8px] font-bold uppercase text-center mb-1">Reward Distribution</p>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={rewardData} cx="50%" cy="50%" innerRadius={12} outerRadius={25} dataKey="value">
                    {rewardData.map((e, i) => <Cell key={i} fill={e.color} stroke="#000" />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="h-28 border border-black/5 p-2">
              <p className="text-[8px] font-bold uppercase text-center mb-1">Epoch Reward Halving</p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={halvingData}>
                  <XAxis dataKey="epoch" fontSize={5} axisLine={false} tickLine={false} />
                  <Bar dataKey="rewards" fill="#000" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="text-[11px] font-serif opacity-70 leading-relaxed space-y-2">
            <p>Each epoch has a fixed maximum reward pool (cap). After each 65-epoch cycle, the pool is halved to manage inflation over a **15-year (390-epoch)** period.</p>
            <div className="bg-black/5 p-3 text-[10px] font-mono italic">
              <p>• Epochs 1–65: 100% Pool</p>
              <p>• Epochs 66–130: 50% Pool</p>
              <p>• Epochs 131–195: 25% Pool</p>
              <p>• Epochs 196–390: Continued Halving</p>
            </div>
            <p>Delegators receive their share from the epoch pool based on their **delegated amount**, **node uptime**, and after the **node operator commission** is deducted.</p>
          </div>
        </div>
      )
    },
    // Page 10: Future & Conclusion
    {
      title: "10-11. Conclusion",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {["Advanced Analytics", "Cross-chain Support", "DAO Governance", "AI Optimization"].map((f, i) => (
              <div key={i} className="border border-black p-2 text-center text-[10px] font-bold uppercase tracking-widest">{f}</div>
            ))}
          </div>
          <div className="p-4 border-2 border-black font-serif text-[12px] italic leading-relaxed">
            Exnus Protocol is dedicated to delivering a scalable, transparent, and high-performance staking ecosystem. By bridging the gap between hardware-backed execution and on-chain security, we are building the trust-minimized infrastructure required for the future of the Solana network.
          </div>
          <div className="text-center pt-4">
            <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-black/20">End of Technical Specification</p>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-primary/30 flex flex-col items-center justify-center p-4 relative">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors group z-50"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Document Container */}
      <div className="w-full max-w-xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 aspect-square w-full p-8 md:p-10 flex flex-col relative overflow-hidden text-[#1A1A1A]"
          >
            {/* Page Header */}
            <div className="flex justify-between items-start mb-6 pb-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/20">Exnus Protocol // Technical Doc</span>
              <span className="text-[9px] font-mono text-black/20">PAGE {currentPage + 1} OF {pages.length}</span>
            </div>

            {/* Page Title */}
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-6 flex items-center gap-3">
              <Hash size={10} /> {pages[currentPage].title}
            </h3>

            {/* Page Content */}
            <div className="flex-1 flex flex-col justify-center">
              {pages[currentPage].content}
            </div>

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 px-4">
          <button 
            onClick={prevPage}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2">
            {pages.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${currentPage === i ? 'bg-white w-4' : 'bg-white/10'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
          Technical Specification // Ref: 9ucom7 // March 2026
        </p>
        <Link to="/" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft size={10} /> Back to Home
        </Link>
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
