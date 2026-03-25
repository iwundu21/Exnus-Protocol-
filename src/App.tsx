/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  BarChart3, 
  Globe, 
  Twitter, 
  Github, 
  Linkedin,
  Mail,
  ExternalLink,
  Activity,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip,
  Cell,
  CartesianGrid
} from 'recharts';

import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';
import Whitepaper from './pages/Whitepaper';

// --- Components ---

const DiscordIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 127.14 96.36" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.78,56.63.48,80.1a105.73,105.73,0,0,0,32.2,16.26,77.7,77.7,0,0,0,6.89-11.11,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.24-16.27C129.38,52.84,124.83,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.837 8.198l-1.991 9.388c-.15.665-.543.83-.1.444l-3.035-2.235-1.464 1.409c-.162.162-.298.298-.611.298l.218-3.091 5.626-5.082c.245-.218-.054-.339-.379-.123L9.06 13.5l-2.997-.937c-.652-.204-.665-.652.136-.964l11.714-4.514c.543-.204.1.123.868.513z"/>
  </svg>
);

const XNodeVisual = () => {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse" />
      
      {/* Main Chassis */}
      <motion.div 
        initial={{ rotateY: -20, rotateX: 10 }}
        animate={{ 
          rotateY: [ -20, 20, -20 ],
          rotateX: [ 10, -10, 10 ],
          y: [ 0, -20, 0 ]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-full h-full preserve-3d"
      >
        {/* Hardware Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[48px] border border-white/10 shadow-2xl flex flex-col p-8 overflow-hidden">
          {/* Internal Glows */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-primary/10 to-transparent" />
          
          {/* Front Panel Details */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-primary animate-ping" />
              <div className="w-3 h-3 rounded-full bg-brand-primary/20" />
            </div>
            <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">XNODE-V2 // CORE</div>
          </div>

          {/* Central Core */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-40 h-40 border-2 border-dashed border-brand-primary/30 rounded-full flex items-center justify-center"
            >
              <div className="w-32 h-32 border border-brand-primary/50 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(244,63,94,0.5)] overflow-hidden">
                  <img 
                    src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeid2os6ocficy2ijgrhbxv4triyfnmrls36grwp6sznsf2r7u7e2km" 
                    alt="Exnus Core" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Status Grid */}
          <div className="grid grid-cols-4 gap-2 mt-auto">
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="h-1 bg-brand-primary/40 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Side Panels (3D effect) */}
        <div className="absolute top-4 -right-4 w-8 h-[calc(100%-32px)] bg-[#0f0f0f] rounded-r-2xl border-y border-r border-white/5 transform skew-y-12" />
      </motion.div>

      {/* Floating Data Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            x: [0, (i % 2 === 0 ? 100 : -100), 0],
            y: [0, (i < 3 ? -100 : 100), 0]
          }}
          transition={{ 
            duration: 4, 
            delay: i * 0.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-brand-primary rounded-full blur-sm z-20"
        />
      ))}
    </div>
  );
};

const PerformanceShowcase = () => {
  const steps = [
    { icon: Globe, title: "Data Ingest", desc: "Off-chain data sources feed into the Exnus network", color: "text-blue-400" },
    { icon: () => (
      <div className="w-full h-full p-1">
        <img 
          src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeid2os6ocficy2ijgrhbxv4triyfnmrls36grwp6sznsf2r7u7e2km" 
          alt="Exnus" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    ), title: "XNode Compute", desc: "High-performance units execute complex logic", color: "text-brand-primary" },
    { icon: ShieldCheck, title: "Verification", desc: "Cryptographic proofs generated for every action", color: "text-green-400" },
    { icon: Layers, title: "On-chain Settlement", desc: "Verified results committed to the blockchain", color: "text-purple-400" }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8 relative">
      {/* Animated Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden md:block -translate-y-1/2 overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-primary to-transparent"
        />
      </div>

      {steps.map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl relative z-10 flex flex-col items-center text-center group hover:bg-white/5 transition-all"
        >
          <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${step.color}`}>
            <step.icon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
          
          {/* Step Number */}
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white/30">
            0{i + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-brand-primary mb-6 border-brand-primary/20">
            <span>Project in Development • Coming Soon</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight md:leading-[0.9] mb-8">
            Turn Your Hardware <br className="hidden sm:block" />
            Into <span className="text-brand-primary">Financial</span> <br className="hidden sm:block" />
            Freedom.
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Run XNode with Off-Chain Execution and On-Chain Settlement.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Waitlist Coming Soon <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              to="/whitepaper" 
              className="px-6 py-3 sm:px-8 sm:py-4 glass rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Read Whitepaper <ExternalLink size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-20 lg:mt-0 px-4 lg:px-0"
        >
          <XNodeVisual />
          
          {/* Floating stats */}
          <div className="absolute -top-10 -right-2 sm:-top-6 sm:-right-6 glass p-3 sm:p-4 rounded-2xl animate-bounce">
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mb-1">Network APY</div>
            <div className="text-lg sm:text-2xl font-bold text-brand-primary">14.2%</div>
          </div>
          <div className="absolute -bottom-10 -left-2 sm:-bottom-6 sm:-left-6 glass p-3 sm:p-4 rounded-2xl animate-bounce delay-700">
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mb-1">Active XNodes</div>
            <div className="text-lg sm:text-2xl font-bold">1,248</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsExnus = () => {
  return (
    <section id="what" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
              Core Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What is Exnus?</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Exnus is a decentralized infrastructure layer bridging the gap between high-performance hardware and on-chain security. We enable complex computations to happen off-chain while maintaining absolute cryptographic proof on the blockchain, verified every 10 minutes.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Zap className="text-brand-primary" />, title: "Off-chain execution", desc: "High-speed processing without gas constraints." },
                { icon: <ShieldCheck className="text-brand-primary" />, title: "On-chain verification", desc: "Cryptographic proofs ensure every result is valid." },
                { icon: <BarChart3 className="text-brand-primary" />, title: "Transparent rewards", desc: "Automated distribution based on verified performance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 glass rounded-2xl glass-hover">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-[40px] p-6 sm:p-12 aspect-square sm:aspect-video flex flex-col items-center justify-center gap-8">
              <div className="flex items-center justify-between w-full max-w-md relative">
                {/* Connection lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
                
                <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 glass rounded-2xl flex items-center justify-center">
                    <Wallet size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/50">User</span>
                </div>

                <motion.div 
                  animate={{ x: [0, 100, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-primary rounded-full blur-[2px] z-20" 
                />

                <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 glass rounded-2xl flex items-center justify-center border-brand-primary/50 glow-primary bg-brand-primary/5 overflow-hidden">
                    <img 
                      src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeid2os6ocficy2ijgrhbxv4triyfnmrls36grwp6sznsf2r7u7e2km" 
                      alt="Exnus XNode" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/50">XNode</span>
                </div>

                <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 glass rounded-2xl flex items-center justify-center">
                    <Layers size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/50">On-Chain</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-green-400 border-green-400/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Verified Proof Generated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 lg:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
            Operational Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Operates</h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">Exnus bridges the gap between off-chain performance and on-chain security through a seamless, automated verification pipeline.</p>
        </div>

        <PerformanceShowcase />
      </div>
    </section>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass px-3 py-2 rounded-lg border border-white/10 text-[10px] font-mono shadow-xl">
        <p className="text-brand-primary font-bold">{payload[0].value}{payload[0].payload.unit || ''}</p>
      </div>
    );
  }
  return null;
};

const XNodesSection = () => {
  const [uptimeData, setUptimeData] = useState([
    { name: '1', value: 99.9, unit: '%' },
    { name: '2', value: 99.8, unit: '%' },
    { name: '3', value: 99.9, unit: '%' },
    { name: '4', value: 100, unit: '%' },
    { name: '5', value: 99.9, unit: '%' },
    { name: '6', value: 99.9, unit: '%' },
    { name: '7', value: 99.9, unit: '%' },
  ]);

  const efficiencyData = [
    { name: 'N1', value: 1.1, unit: 'ms' },
    { name: 'N2', value: 1.4, unit: 'ms' },
    { name: 'N3', value: 1.2, unit: 'ms' },
    { name: 'N4', value: 1.0, unit: 'ms' },
    { name: 'N5', value: 1.3, unit: 'ms' },
  ];

  const verifiedData = [
    { name: 'M', value: 10, unit: 'M' },
    { name: 'T', value: 12, unit: 'M' },
    { name: 'W', value: 11, unit: 'M' },
    { name: 'T', value: 15, unit: 'M' },
    { name: 'F', value: 14, unit: 'M' },
    { name: 'S', value: 18, unit: 'M' },
    { name: 'S', value: 20, unit: 'M' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setUptimeData(prev => {
        const newData = [...prev];
        const lastIndex = newData.length - 1;
        const variation = (Math.random() - 0.5) * 0.1;
        newData[lastIndex] = { 
          ...newData[lastIndex], 
          value: Math.min(100, Math.max(99.5, newData[lastIndex].value + variation)) 
        };
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="xnodes" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
                Hardware Layer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">What are XNodes?</h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                XNodes are the backbone of the Exnus network—dedicated hardware units optimized for high-throughput computation and cryptographic verification.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Performance-based rewards",
                  "Open node participation",
                  "On-chain verified activity",
                  "Hardware-level security"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:glow-primary transition-all shadow-[0_0_40px_rgba(244,63,94,0.2)]">
                Waitlist Coming Soon
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Uptime Chart */}
                <div className="glass p-6 rounded-3xl group cursor-crosshair">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-white/50 uppercase">Uptime</div>
                    <div className="text-sm font-bold text-green-400">{uptimeData[uptimeData.length - 1].value.toFixed(2)}%</div>
                  </div>
                  <div className="h-20 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={uptimeData}>
                        <defs>
                          <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#4ade80" 
                          fillOpacity={1} 
                          fill="url(#colorUptime)" 
                          strokeWidth={2}
                          isAnimationActive={true}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Efficiency Chart */}
                <div className="glass p-6 rounded-3xl bg-brand-primary/5 border-brand-primary/20 group cursor-crosshair">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-white/50 uppercase">Efficiency</div>
                    <div className="text-sm font-bold text-brand-primary">1.2ms</div>
                  </div>
                  <div className="h-20 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={efficiencyData}>
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {efficiencyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 3 ? '#f43f5e' : 'rgba(244, 63, 94, 0.3)'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Verified Chart */}
                <div className="glass p-6 rounded-3xl group cursor-crosshair">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-white/50 uppercase">Verified</div>
                    <div className="text-sm font-bold">14.2M</div>
                  </div>
                  <div className="h-20 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={verifiedData}>
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                        <Line 
                          type="stepAfter" 
                          dataKey="value" 
                          stroke="#f43f5e" 
                          strokeWidth={2} 
                          dot={false}
                          activeDot={{ r: 4, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Health Indicator */}
                <div className="glass p-6 rounded-3xl flex flex-col justify-between h-[128px] group hover:bg-white/5 transition-colors">
                  <div className="text-xs text-white/50 uppercase">Network Health</div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-green-400/20 flex items-center justify-center">
                        <CheckCircle2 className="text-green-400" size={24} />
                      </div>
                      <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-green-400 animate-ping opacity-20" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-400">Optimal</div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest">All systems nominal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyExnus = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
            Protocol Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Exnus?</h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">The infrastructure layer designed for the next generation of decentralized applications, combining raw hardware power with cryptographic certainty.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Scalable", desc: "Off-chain execution allows for massive throughput without gas-related bottlenecks." },
            { title: "Transparent", desc: "Every computation is backed by a cryptographic on-chain proof for absolute trust." },
            { title: "Efficient", desc: "Optimized reward system ensures hardware is used to its maximum potential." },
            { title: "User-aligned", desc: "Incentives are designed to reward long-term network stability and growth." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl glass-hover">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6">
                <div className="w-2 h-2 bg-brand-primary rounded-full" />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const halvingData = [
  { epoch: '1-65', rewards: 100 },
  { epoch: '66-130', rewards: 50 },
  { epoch: '131-195', rewards: 25 },
  { epoch: '196-260', rewards: 12.5 },
  { epoch: '261-325', rewards: 6.25 },
  { epoch: '326-390', rewards: 3.125 },
];

const HalvingSchedule = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Epoch Reward <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Halving</span>
          </h2>
          <p className="text-lg text-white/60">
            A predictable, deflationary emission schedule. After each 65-epoch cycle, the reward pool is halved to manage inflation over a 15-year period. Each epoch lasts exactly 14 days.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-12 border-white/5">
          <div className="h-[300px] sm:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={halvingData} margin={{ top: 20, right: 20, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="epoch" 
                  stroke="rgba(255,255,255,0.5)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  dy={10}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.5)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  formatter={(value) => [`${value}%`, 'Reward Pool']}
                  labelStyle={{ color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}
                />
                <Bar dataKey="rewards" fill="#F27D26" radius={[6, 6, 0, 0]}>
                  {halvingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#F27D26' : `rgba(242, 125, 38, ${1 - index * 0.15})`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Next-Gen Dashboard</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Experience total control over your hardware assets. Our upcoming dashboard provides real-time insights into node health, mining performance, and automated reward distribution.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Real-time XNode health monitoring",
                "Detailed mining yield analytics",
                "One-click node management",
                "Automated reward history tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <ChevronRight size={14} className="text-brand-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[40px] p-4 overflow-hidden border-brand-primary/30 shadow-[0_0_50px_rgba(244,63,94,0.1)]">
              <div className="bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-white/5">
                {/* Mock Browser Header */}
                <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="px-4 py-1 glass rounded-lg text-[10px] text-white/30 font-mono">
                    app.exnus.network
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10" />
                </div>

                {/* Mock App Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                      <div className="h-8 w-20 sm:w-full shrink-0 glass rounded-lg" />
                      <div className="h-8 w-20 sm:w-full shrink-0 glass rounded-lg bg-brand-primary/10" />
                      <div className="h-8 w-20 sm:w-full shrink-0 glass rounded-lg" />
                      <div className="h-8 w-20 sm:w-full shrink-0 glass rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="glass p-3 sm:p-4 rounded-2xl border-brand-primary/20">
                          <div className="text-[10px] text-white/30 uppercase mb-1">Total Mined</div>
                          <div className="text-lg sm:text-2xl font-bold text-brand-primary">42,850 EXN</div>
                        </div>
                        <div className="glass p-3 sm:p-4 rounded-2xl">
                          <div className="text-[10px] text-white/30 uppercase mb-1">Active Nodes</div>
                          <div className="text-lg sm:text-2xl font-bold">03</div>
                        </div>
                      </div>
                      
                      <div className="glass p-4 sm:p-5 rounded-2xl">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-[10px] text-white/30 uppercase">Performance History</div>
                          <div className="text-[10px] text-green-400">+12.4%</div>
                        </div>
                        <div className="flex items-end gap-1 h-16 sm:h-24">
                          {[30, 45, 35, 60, 55, 80, 75, 90, 85, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-brand-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-3 sm:p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-green-400/10 flex items-center justify-center shrink-0">
                        <Activity size={16} className="text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">XNode #1420</div>
                        <div className="text-[10px] text-white/30">Status: Optimal</div>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-bold">14.2% APY</div>
                      <div className="text-[10px] text-white/30">Uptime: 99.9%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass px-6 py-3 rounded-2xl border-brand-primary/50 glow-primary">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">Concept UI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">The future of hardware is <span className="text-brand-primary">decentralized.</span></h2>
        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">Join the Exnus network and contribute to the next generation of high-performance infrastructure.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Waitlist Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center overflow-hidden border border-brand-primary/20">
                <img 
                  src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeid2os6ocficy2ijgrhbxv4triyfnmrls36grwp6sznsf2r7u7e2km" 
                  alt="Exnus Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter">EXNUS</span>
            </div>
            <p className="text-white/40 max-w-xs leading-relaxed">
              Hardware-powered mining. Verified on-chain. The future of decentralized infrastructure.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-2">GitHub <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/40">Coming Soon</span></li>
              <li><Link to="/whitepaper" className="hover:text-brand-primary transition-colors">Whitepaper</Link></li>
              <li className="flex items-center gap-2">Audit Reports <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/40">Coming Soon</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Connect</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="https://x.com/exnusprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter/X</a></li>
              <li><a href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><DiscordIcon size={14} /> Discord</a></li>
              <li><a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><TelegramIcon size={14} /> Telegram Group</a></li>
              <li><a href="https://t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><TelegramIcon size={14} /> Telegram Channel</a></li>
              <li><a href="https://www.linkedin.com/in/exnus-protocol-248a85277?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
              <li><a href="mailto:contact@exnus.xyz" className="hover:text-brand-primary transition-colors flex items-center gap-2"><Mail size={14} /> contact@exnus.xyz</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-white/30 uppercase tracking-widest">
          <div>© 2026 Exnus Foundation. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">Privacy Policy <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/40">Coming Soon</span></a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">Terms and Conditions <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/40">Coming Soon</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
            The Visionaries
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Team</h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">The team behind Exnus Protocol, dedicated to building the future of hardware-powered decentralized infrastructure through node mining.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* James */}
          <div className="glass p-8 rounded-3xl border border-white/10 w-full text-center group">
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-2xl overflow-hidden border-2 border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
              <img 
                src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeicbmubsouck47cgziewesrjspsxtmyq7wtjezawmxqc4ncx3impce" 
                alt="James" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">James</h3>
            <p className="text-brand-primary font-mono text-[10px] uppercase tracking-widest mb-4">Founder</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Behind the idea of Exnus. rethinking node mining through hardware and on-chain verification.
            </p>
          </div>

          {/* neobubba */}
          <div className="glass p-8 rounded-3xl border border-white/10 w-full text-center group">
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-2xl overflow-hidden border-2 border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
              <img 
                src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeihopaftaatlfmks34fskg5k4ac6zgrlciq3wsrtstgworxhspbbyi" 
                alt="neobubba" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">neobubba</h3>
            <p className="text-brand-primary font-mono text-[10px] uppercase tracking-widest mb-4">Co-Founder</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Solana-focused technical contributor with experience at Xandeum Network, working across community operations and technical support.
            </p>
          </div>

          {/* Mr. Mohsin */}
          <div className="glass p-8 rounded-3xl border border-white/10 w-full text-center group">
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-2xl overflow-hidden border-2 border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
              <img 
                src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafkreie4zhiko6qmjmillo2myk2w6iddjibihlwe3fij2s66gwmka2r7n4" 
                alt="Mr. Mohsin" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Mr. Mohsin</h3>
            <p className="text-brand-primary font-mono text-[10px] uppercase tracking-widest mb-4">Marketer</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Sr. web developer | Web 3 Specialist | Marketing Expert
            </p>
          </div>

          {/* Ismaila mufutau */}
          <div className="glass p-8 rounded-3xl border border-white/10 w-full text-center group">
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-2xl overflow-hidden border-2 border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
              <img 
                src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeiez4solbpd2orsrvtrgymftbct5rkhhkh7cdnimjd43kgr37qis4a" 
                alt="Ismaila mufutau" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Ismaila mufutau</h3>
            <p className="text-brand-primary font-mono text-[10px] uppercase tracking-widest mb-4">Social Media Manager</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Driving community engagement and social presence for the Exnus ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1: Planning & Architecture",
      status: "In Progress",
      items: ["Protocol Architecture Design", "XNode Hardware Prototyping", "Technical Whitepaper", "Community Building"]
    },
    {
      phase: "Phase 2: Development",
      status: "Upcoming",
      items: ["Off-chain Execution Engine", "On-chain Verification Logic", "Closed Alpha Testing"]
    },
    {
      phase: "Phase 3: Expansion",
      status: "Upcoming",
      items: ["Public Beta Launch", "XNode Operator Onboarding"]
    },
    {
      phase: "Phase 4: Maturity",
      status: "Future",
      items: ["Full Decentralized Governance", "Cross-chain Interoperability", "Global Node Distribution"]
    }
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-6 border-brand-primary/20 uppercase tracking-widest">
            Strategic Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Roadmap</h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">The journey towards a truly scalable and transparent hardware-powered infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl ${
                item.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                item.status === 'In Progress' ? 'bg-brand-primary/20 text-brand-primary' :
                'bg-white/5 text-white/30'
              }`}>
                {item.status}
              </div>
              <h4 className="text-xl font-bold mb-6 pt-2">{item.phase}</h4>
              <ul className="space-y-4">
                {item.items.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/50">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      item.status === 'Completed' ? 'bg-green-400' :
                      item.status === 'In Progress' ? 'bg-brand-primary' :
                      'bg-white/20'
                    }`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Hero />
            <WhatIsExnus />
            <HowItWorks />
            <XNodesSection />
            <WhyExnus />
            <HalvingSchedule />
            <DashboardPreview />
            <Roadmap />
            <Team />
            <FinalCTA />
            <Footer />
          </div>
        } />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </BrowserRouter>
  );
}
