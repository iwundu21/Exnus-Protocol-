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
    { name: 'Mining Rewards', value: 98.6, color: '#000000' },
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
    // Page 1: Executive Summary
    {
      title: "01. Executive Summary",
      content: (
        <div className="space-y-8">
          <div className="pb-8 mb-8 border-b border-black/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 mb-4">Technical Specification // V1.1.0</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-4">XNode Protocol</h1>
            <p className="text-lg text-black/60 italic mt-1">Trustless Hardware Node Reward Infrastructure</p>
          </div>
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <p>XNode introduces a next-generation trustless node-based reward system designed for hardware nodes. The platform allows nodes to earn dynamic rewards based on uptime, with immutable off-chain tracking and epoch-based claiming mechanisms. <strong>Participation is open to everyone, allowing any user to run a node and contribute to the network.</strong></p>
            <div className="p-8 border-y border-black/10 text-black italic text-lg leading-relaxed">
              "By combining blockchain settlement with off-chain verification, XNode ensures fair, secure, and transparent reward distribution without imposing per-block transaction fees."
            </div>
            <p>This hybrid architecture addresses the fundamental scalability and trust issues inherent in current decentralized physical infrastructure networks (DePIN).</p>
          </div>
        </div>
      )
    },
    // Page 2: Market Analysis
    {
      title: "02. Market Analysis",
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <h4 className="font-sans font-bold uppercase tracking-widest text-black text-xs border-b border-black/10 pb-2">2.1 Blockchain and IoT Integration</h4>
            <p>The global blockchain market is expected to exceed $100 billion by 2030, with significant growth in IoT and decentralized networks. As IoT devices proliferate, a scalable and fair reward system for node participation is critical.</p>
            
            {/* Network Topology Diagram */}
            <div className="py-8 border border-black/5 bg-black/[0.01] relative overflow-hidden">
              <div className="flex justify-center items-center h-40 relative">
                <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center bg-white z-10">
                  <span className="text-[10px] font-mono font-bold">CORE</span>
                </div>
                {/* Orbiting Nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 pointer-events-none"
                    style={{ rotate: deg }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 border border-black/20 bg-white" />
                  </motion.div>
                ))}
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <circle cx="50%" cy="50%" r="64" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
                </svg>
              </div>
              <p className="text-[10px] font-mono text-black/30 text-center uppercase tracking-widest">Decentralized Network Topology</p>
            </div>

            <p className="italic text-black/60">Platforms like Helium and Golem have demonstrated the demand for incentive-based networks, but current solutions either require frequent transaction fees or lack trustless uptime verification.</p>
            
            <h4 className="font-sans font-bold uppercase tracking-widest text-black mt-8 text-xs border-b border-black/10 pb-2">2.2 Problem Space</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { t: "Centralization", d: "Existing systems are often manual or centralized, creating trust issues." },
                { t: "Cost Inefficiency", d: "Per-block on-chain reward systems are cost-prohibitive due to fees." },
                { t: "Uptime Spoofing", d: "Hardware uptime is easily falsified without software-based verification." },
                { t: "Unfair Sharing", d: "Lack of efficient systems for dynamic reward sharing proportional to participation." }
              ].map((item, i) => (
                <div key={i} className="border border-black/5 p-4">
                  <p className="font-sans font-bold text-[10px] uppercase tracking-widest mb-1">{item.t}</p>
                  <p className="text-sm text-black/70 leading-snug">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 3: Landscape Overview
    {
      title: "03. Landscape Overview",
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <p>Current node reward and IoT integration platforms include:</p>
            <div className="space-y-4">
              <div className="border-l border-black/20 pl-6">
                <p className="font-sans font-bold text-xs uppercase tracking-widest">Helium Network</p>
                <p className="text-sm italic text-black/60">Reward system based on long-term device activity, but requires hardware staking.</p>
              </div>
              <div className="border-l border-black/20 pl-6">
                <p className="font-sans font-bold text-xs uppercase tracking-widest">Golem Network</p>
                <p className="text-sm italic text-black/60">Distributed computing rewards, primarily software-focused.</p>
              </div>
              <div className="border-l border-black/20 pl-6">
                <p className="font-sans font-bold text-xs uppercase tracking-widest">Filecoin</p>
                <p className="text-sm italic text-black/60">Storage-based rewards with significant upfront setup costs.</p>
              </div>
            </div>
            <div className="p-6 border border-black/10 bg-black/5 font-mono text-xs italic">
              Gap analysis shows that existing platforms do not combine trustless off-chain tracking, automatic uptime reset, dynamic per-block rewards, and epoch-based claim efficiently.
            </div>
          </div>
        </div>
      )
    },
    // Page 4: Problem Definition
    {
      title: "04. Problem Definition",
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <p>The industry faces four primary challenges in node incentivization:</p>
            
            {/* Performance Comparison Chart */}
            <div className="py-6 border border-black/5 bg-black/[0.01]">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-center mb-4">Settlement Efficiency Comparison</p>
              <div className="h-32 flex items-end justify-center gap-8 px-8">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-black/5 h-24 relative">
                    <motion.div initial={{ height: "100%" }} animate={{ height: "100%" }} className="absolute bottom-0 w-full bg-black/10" />
                  </div>
                  <span className="text-[8px] font-mono uppercase">Standard DePIN</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-black/5 h-24 relative">
                    <motion.div initial={{ height: "100%" }} animate={{ height: "12%" }} className="absolute bottom-0 w-full bg-black" />
                  </div>
                  <span className="text-[8px] font-mono uppercase">XNode Protocol</span>
                </div>
              </div>
              <p className="text-[8px] font-serif italic text-center mt-4 text-black/40">Reduction in on-chain transaction overhead via Epoch Aggregation.</p>
            </div>

            <div className="space-y-4">
              {[
                { t: "Verification Failure", d: "Centralized servers cannot guarantee accurate uptime calculation." },
                { t: "Falsified Uptime", d: "Hardware uptime is easily falsified, leading to unfair reward distribution." },
                { t: "Settlement Inefficiency", d: "Frequent on-chain reward settlements are expensive and inefficient." },
                { t: "Lack of Autonomy", d: "Nodes require an autonomous, tamper-proof, and verifiable reward system." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start py-4 border-b border-black/5 last:border-0">
                  <span className="font-mono text-xs text-black/30">0{i+1}</span>
                  <div>
                    <p className="font-sans font-bold text-xs uppercase tracking-widest mb-1">{item.t}</p>
                    <p className="text-sm text-black/70">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 5: Exnus Solution (I)
    {
      title: "05. Exnus Solution (I)",
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <div className="border-l border-black/20 pl-6">
              <h4 className="font-sans font-bold text-xs uppercase mb-2 tracking-widest">1. Dynamic Per-Block Reward</h4>
              <p className="text-sm mb-4">Rewards are distributed proportionally to XNode uptime per block. Only active nodes share rewards.</p>
              
              {/* Reward Logic Diagram */}
              <div className="my-6 p-6 border border-black/5 bg-black/[0.02] relative overflow-hidden">
                <div className="flex justify-between items-end h-32 gap-2">
                  {[40, 70, 30, 90, 50, 80].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className="w-full bg-black/10 border-t border-black/20"
                      />
                      <span className="text-[8px] font-mono text-black/40">N{i+1}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-black/20 uppercase">Live Reward Weighting</div>
              </div>

              <div className="bg-black/5 p-6 font-mono text-center border border-black/5">
                <p className="text-lg">R_i = (B × U_i) / ΣU_all</p>
                <p className="text-[10px] mt-2 text-black/40 uppercase tracking-widest">Reward Formula</p>
              </div>
            </div>
            
            <div className="border-l border-black/20 pl-6">
              <h4 className="font-sans font-bold text-xs uppercase mb-2 tracking-widest">2. Immutable Off-Chain Server</h4>
              <p className="text-sm mb-4">Deployed as a frozen Docker container or VM. Automatic uptime reset when nodes go offline or are manually turned off. Append-only logs ensure full auditability.</p>
              
              <h4 className="font-sans font-bold text-xs uppercase mb-2 tracking-widest">3. Network Fee Structure</h4>
              <p className="text-sm">To ensure long-term protocol sustainability, all node operators pay a <strong>1.40% network fee</strong> from the total mined rewards at the end of each epoch. This fee is automatically deducted during the settlement process.</p>
            </div>
          </div>
        </div>
      )
    },
    // Page 6: Data Integrity & Verification
    {
      title: "06. Data Integrity & Verification",
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-base font-serif leading-relaxed text-black/90">
            <h4 className="font-sans font-bold text-xs uppercase mb-4 tracking-widest">Merkle Tree Proof System</h4>
            <p className="text-sm">To ensure trustless verification without bloating the blockchain, XNode utilizes Merkle Trees to aggregate millions of heartbeat signals into a single root hash.</p>
            
            {/* Merkle Tree Diagram */}
            <div className="py-12 border border-black/5 bg-black/[0.01] flex flex-col items-center">
              <div className="relative w-full max-w-md h-48">
                {/* Root */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-8 border border-black flex items-center justify-center text-[10px] font-mono bg-white z-10">ROOT</div>
                
                {/* Lines to L1 */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-8 border-x border-t border-black/10" />
                
                {/* L1 */}
                <div className="absolute top-16 left-1/4 -translate-x-1/2 w-16 h-8 border border-black/40 flex items-center justify-center text-[8px] font-mono bg-white">H(A+B)</div>
                <div className="absolute top-16 left-3/4 -translate-x-1/2 w-16 h-8 border border-black/40 flex items-center justify-center text-[8px] font-mono bg-white">H(C+D)</div>
                
                {/* Lines to L2 */}
                <div className="absolute top-24 left-1/4 -translate-x-1/2 w-16 h-8 border-x border-t border-black/10" />
                <div className="absolute top-24 left-3/4 -translate-x-1/2 w-16 h-8 border-x border-t border-black/10" />
                
                {/* L2 (Leaves) */}
                <div className="absolute top-32 left-[12.5%] -translate-x-1/2 w-10 h-6 border border-black/10 flex items-center justify-center text-[6px] font-mono">H(A)</div>
                <div className="absolute top-32 left-[37.5%] -translate-x-1/2 w-10 h-6 border border-black/10 flex items-center justify-center text-[6px] font-mono">H(B)</div>
                <div className="absolute top-32 left-[62.5%] -translate-x-1/2 w-10 h-6 border border-black/10 flex items-center justify-center text-[6px] font-mono">H(C)</div>
                <div className="absolute top-32 left-[87.5%] -translate-x-1/2 w-10 h-6 border border-black/10 flex items-center justify-center text-[6px] font-mono">H(D)</div>
              </div>
              <p className="text-[10px] font-mono text-black/30 mt-4 uppercase tracking-widest">Cryptographic Proof Structure</p>
            </div>

            <div className="border-l border-black/20 pl-6">
              <h4 className="font-sans font-bold text-xs uppercase mb-2 tracking-widest">Epoch-Based Claiming</h4>
              <p className="text-sm">Per-block rewards are aggregated per epoch. Users claim rewards once per epoch, minimizing transaction costs. Merkle proofs enable trustless verification on-chain.</p>
            </div>
          </div>
        </div>
      )
    },
    // Page 7: Technical Architecture
    {
      title: "07. Technical Architecture",
      content: (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest border-b border-black/10 pb-2">System Interaction Model</h4>
            
            {/* Advanced Architecture Diagram */}
            <div className="py-12 border border-black/5 bg-black/[0.02] relative">
              <div className="flex justify-between items-center px-8 relative z-10">
                {/* Node Layer */}
                <div className="flex flex-col items-center gap-4">
                  <div className="grid grid-cols-2 gap-1">
                    {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 border border-black/20 bg-white" />)}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-black/40">XNodes</span>
                </div>

                {/* SVG Path Connector */}
                <div className="flex-1 h-px relative">
                  <svg className="absolute inset-0 w-full h-12 -top-6 overflow-visible">
                    <path d="M 0 24 L 100% 24" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" fill="none" />
                    <circle cx="50%" cy="24" r="3" fill="white" stroke="black" strokeWidth="1" />
                  </svg>
                </div>

                {/* Processing Layer */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 border border-black flex flex-col items-center justify-center bg-white relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-black" />
                    <Cpu size={24} className="mb-2" />
                    <span className="text-[8px] font-mono text-center px-2">IMMUTABLE SERVER</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-black/40">Verification</span>
                </div>

                {/* SVG Path Connector */}
                <div className="flex-1 h-px relative">
                  <svg className="absolute inset-0 w-full h-12 -top-6 overflow-visible">
                    <path d="M 0 24 L 100% 24" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" fill="none" />
                    <circle cx="50%" cy="24" r="3" fill="white" stroke="black" strokeWidth="1" />
                  </svg>
                </div>

                {/* Settlement Layer */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full border-2 border-black border-dashed flex items-center justify-center bg-white">
                    <Database size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-black/40">Blockchain</span>
                </div>
              </div>
              
              {/* Decorative Background Grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            </div>

            <div className="space-y-4">
              {[
                { t: "1. Node Layer", d: "Nodes send periodic heartbeat signals. Current session uptime increments per block." },
                { t: "2. Immutable Off-Chain Server", d: "Receives heartbeats and calculates per-block dynamic rewards. Resets uptime automatically when nodes go offline." },
                { t: "3. Epoch Aggregator", d: "Aggregates block rewards per node over the epoch. Prepares a single on-chain claim transaction." },
                { t: "4. Blockchain Settlement", d: "Epoch-level rewards are submitted and verified on-chain. Nodes claim rewards in one transaction per epoch." }
              ].map((step, i) => (
                <div key={i} className="py-3 border-b border-black/5 last:border-0">
                  <p className="font-sans font-bold text-[10px] uppercase tracking-widest mb-1">{step.t}</p>
                  <p className="text-xs font-serif text-black/70 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 8: Advantages & Conclusion
    {
      title: "08. Advantages & Conclusion",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {[
              { a: "Fairness", d: "Proportional rewards." },
              { a: "Trustless", d: "Immutable logic." },
              { a: "Cost-Efficient", d: "Single claim per epoch." },
              { a: "Transparent", d: "Audit-ready logs." }
            ].map((item, i) => (
              <div key={i} className="border border-black/10 p-4">
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest mb-1">{item.a}</p>
                <p className="text-xs text-black/50 italic">{item.d}</p>
              </div>
            ))}
          </div>

          {/* Node Lifecycle Diagram */}
          <div className="py-8 border border-black/5 bg-black/[0.01] relative">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-center mb-6">Node Lifecycle State Machine</h4>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-8 border border-black/10 flex items-center justify-center text-[8px] font-mono">OFFLINE</div>
                <ArrowRight size={12} className="text-black/20" />
                <div className="w-16 h-8 border border-black flex items-center justify-center text-[8px] font-mono bg-black text-white">ACTIVE</div>
                <ArrowRight size={12} className="text-black/20" />
                <div className="w-16 h-8 border border-black/10 flex items-center justify-center text-[8px] font-mono">CLAIMING</div>
              </div>
              <div className="w-px h-24 bg-black/5" />
              <div className="text-[8px] font-serif italic text-black/40 max-w-[120px]">
                Automatic state transitions based on heartbeat frequency and epoch boundaries.
              </div>
            </div>
          </div>

          <div className="p-8 border-y border-black/10 font-serif text-lg italic leading-relaxed text-black/90 mt-8">
            Exnus via XNode provides a scalable, trustless, and fair reward system for hardware nodes. By combining immutable off-chain logic, dynamic per-block rewards, a sustainable 1.40% network fee, automatic uptime reset, and epoch-based claims, the platform addresses critical problems in node reward ecosystems and creates a transparent, cost-efficient, and verifiable infrastructure for decentralized participation.
          </div>
          <p className="text-[10px] font-mono text-black/40 uppercase tracking-[0.3em] text-center">End of Specification // Exnus Protocol 2026</p>
        </div>
      )
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1 < pages.length ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : 0));

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans selection:bg-black/10 flex flex-col items-center py-6 px-4 relative overflow-hidden">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-black/50 hover:text-black transition-colors group z-50 px-4 py-2 border border-black/10"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Document Container */}
      <div className="w-full max-w-[850px] relative mt-16 flex-1 flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
            <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white w-full flex flex-col relative overflow-hidden text-[#1A1A1A] aspect-auto md:aspect-[1/1.414] min-h-[80vh] border border-black/10"
          >
            {/* Page Content */}
            <div className="w-full h-full p-8 xl:p-16 flex flex-col relative">
              <div className="flex justify-between items-center mb-12 pb-4 border-b border-black/10">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/40">Exnus Protocol // Technical Architecture</span>
                <span className="text-[10px] font-mono text-black/40">PAGE {currentPage + 1} / {pages.length}</span>
              </div>

              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-black/60 mb-10">
                {pages[currentPage].title}
              </h3>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 pb-4">
                {pages[currentPage].content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 px-4 w-full">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group bg-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2 flex-wrap justify-center max-w-[60%]">
            {pages.map((_, i) => (
              <button
                key={i} 
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all ${currentPage === i ? 'bg-black w-6' : 'bg-black/20 w-2 hover:bg-black/40'}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            disabled={currentPage >= pages.length - 1}
            className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group bg-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:cursor-not-allowed"
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

