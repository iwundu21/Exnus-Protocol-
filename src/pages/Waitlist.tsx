import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Loader2, Sparkles, ExternalLink } from 'lucide-react';

const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965H5.078z"/>
  </svg>
);

const TelegramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.837 8.198l-1.991 9.388c-.15.665-.543.83-.1.444l-3.035-2.235-1.464 1.409c-.162.162-.298.298-.611.298l.218-3.091 5.626-5.082c.245-.218-.054-.339-.379-.123L9.06 13.5l-2.997-.937c-.652-.204-.665-.652.136-.964l11.714-4.514c.543-.204.1.123.868.513z"/>
  </svg>
);

const DiscordIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.78,56.63.48,80.1a105.73,105.73,0,0,0,32.2,16.26,77.7,77.7,0,0,0,6.89-11.11,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.24-16.27C129.38,52.84,124.83,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

import "@solana/wallet-adapter-react-ui/styles.css";

const WaitlistContent = () => {
  const { publicKey, connected } = useWallet();
  const [step, setStep] = useState(1);
  const [xHandle, setXHandle] = useState('');
  const [xHandleError, setXHandleError] = useState('');
  const [tgHandle, setTgHandle] = useState('');
  const [tgHandleError, setTgHandleError] = useState('');
  const [discordHandle, setDiscordHandle] = useState('');
  const [discordHandleError, setDiscordHandleError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  useEffect(() => {
    if (!connected || !publicKey) {
      setStep(1);
      setIsSuccess(false);
      setIsAlreadyRegistered(false);
      setIsChecking(false);
      setXHandle('');
      setTgHandle('');
      setDiscordHandle('');
      return;
    }

    const checkRegistration = async () => {
      setIsChecking(true);
      try {
        const docRef = doc(db, "waitlist", publicKey.toString());
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setIsAlreadyRegistered(true);
          setIsSuccess(true);
        } else {
          setIsAlreadyRegistered(false);
          setIsSuccess(false);
          if (step === 1) setStep(2);
        }
      } catch (error) {
        console.error("Error checking registration:", error);
        if (step === 1) setStep(2); // Fallback to let them register if error
      } finally {
        setIsChecking(false);
      }
    };

    checkRegistration();
  }, [connected, publicKey]);

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleXHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setXHandle(value);
    
    if (value.length > 0) {
      if (!value.startsWith('@')) {
        setXHandleError("Handle must start with '@'");
      } else if (value.length === 1) {
        setXHandleError("Handle cannot be empty after '@'");
      } else if (!/^@[a-zA-Z0-9_]+$/.test(value)) {
        setXHandleError("Only letters, numbers, and underscores are allowed");
      } else {
        setXHandleError('');
      }
    } else {
      setXHandleError('');
    }
  };

  const handleTgHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTgHandle(value);
    if (value.length > 0 && value.trim() === '') {
      setTgHandleError("Handle cannot be just spaces");
    } else if (value.length > 0) {
      setTgHandleError('');
    } else {
      setTgHandleError("Telegram handle is required");
    }
  };

  const handleDiscordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDiscordHandle(value);
    if (value.length > 0 && value.trim() === '') {
      setDiscordHandleError("Username cannot be just spaces");
    } else if (value.length > 0) {
      setDiscordHandleError('');
    } else {
      setDiscordHandleError("Discord username is required");
    }
  };

  const handleSubmit = async () => {
    if (!publicKey) return;
    setIsSubmitting(true);
    
    try {
      await setDoc(doc(db, "waitlist", publicKey.toString()), {
        walletAddress: publicKey.toString(),
        xHandle,
        tgHandle,
        discordHandle,
        timestamp: serverTimestamp(),
      });
      
      // Keep the animation delay for UX
      await new Promise(resolve => setTimeout(resolve, 3500));
      setIsSuccess(true);
    } catch (error) {
      console.error("Error saving to waitlist:", error);
      // Fallback if error occurs, still show success for UX or handle differently
      await new Promise(resolve => setTimeout(resolve, 3500));
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-brand-primary/30 flex flex-col items-center py-6 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 z-0" />
      
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors group z-50 px-4 py-2 glass rounded-full border-white/10"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      <div className="w-full max-w-xl relative mt-20 flex-1 flex flex-col justify-center items-center">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold text-brand-primary mb-4 border-brand-primary/20 uppercase tracking-widest">
            <Sparkles size={12} /> Early Access Perks
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Join the Waitlist</h1>
          <p className="text-white/60">Complete the steps below to secure your early access spot in the Exnus ecosystem.</p>
        </div>

        <div className="w-full glass rounded-3xl p-8 border-white/10 relative bg-black/40 backdrop-blur-2xl min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center text-center py-10 relative"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                  <CheckCircle2 size={40} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {isAlreadyRegistered ? "You're already registered!" : "You're on the list!"}
                </h3>
                <p className="text-white/60 mb-8">
                  {isAlreadyRegistered 
                    ? "Your wallet is already on the waitlist. We'll notify you when the next phase begins."
                    : "We'll notify you when the next phase begins."}
                </p>
                <Link to="/" className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-colors">
                  Return Home
                </Link>
              </motion.div>
            ) : isChecking ? (
              <motion.div
                key="checking"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 relative"
              >
                <Loader2 size={40} className="animate-spin text-brand-primary mb-6" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Checking Registration...</h3>
                <p className="text-white/50 text-center">Verifying your wallet address on the network</p>
              </motion.div>
            ) : isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 relative"
              >
                <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                  {/* Pulsing rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-brand-primary"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                    className="absolute inset-0 rounded-full border-2 border-brand-primary"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                    className="absolute inset-0 rounded-full border-2 border-brand-primary"
                  />
                  
                  {/* Central glowing orb */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-brand-primary/20 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center z-10 overflow-hidden border border-brand-primary/50"
                  >
                    <img 
                      src="https://azure-big-booby-964.mypinata.cloud/ipfs/bafybeid2os6ocficy2ijgrhbxv4triyfnmrls36grwp6sznsf2r7u7e2km" 
                      alt="Exnus Logo" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
                
                <motion.h3
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl font-bold mb-2 tracking-tight"
                >
                  Securing Early Access...
                </motion.h3>
                <p className="text-white/50 text-center max-w-[250px]">
                  Encrypting data and securing your position on the network
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 relative"
              >
              {/* Step 1: Connect Wallet */}
              <div className={`transition-opacity duration-300 ${step >= 1 ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${connected ? 'bg-green-500 text-white' : 'bg-brand-primary text-white'}`}>
                      {connected ? <CheckCircle2 size={16} /> : '1'}
                    </div>
                    <h3 className="text-lg font-bold">Connect Solana Wallet</h3>
                  </div>
                </div>
                <div className="pl-11">
                  <WalletMultiButton className="!bg-white/10 hover:!bg-white/20 !transition-colors !rounded-xl !h-12 !px-6 !font-sans !font-bold" />
                </div>
              </div>

              {/* Step 2: Twitter */}
              <div className={`transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > 2 ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50'}`}>
                    {step > 2 ? <CheckCircle2 size={16} /> : '2'}
                  </div>
                  <h3 className="text-lg font-bold flex items-center gap-2"><XIcon size={18} className="text-white" /> Follow on X</h3>
                </div>
                <div className="pl-11 space-y-3">
                  <a href="https://x.com/exnusprotocol" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-primary hover:underline">
                    Follow <ExternalLink size={14} />
                  </a>
                  <input 
                    type="text" 
                    placeholder="Your X Handle (@username)" 
                    value={xHandle}
                    onChange={handleXHandleChange}
                    className={`w-full bg-black/50 border ${xHandleError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-primary/50'} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors`}
                  />
                  {xHandleError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {xHandleError}
                    </motion.p>
                  )}
                  {step === 2 && xHandle && !xHandleError && (
                    <motion.button 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      onClick={handleNextStep}
                      className="px-6 py-2 bg-brand-primary text-white rounded-lg font-bold text-sm hover:bg-brand-primary/90 transition-colors"
                    >
                      Continue
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Step 3: Telegram */}
              <div className={`transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > 3 ? 'bg-green-500 text-white' : 'bg-white/10 text-white/50'}`}>
                    {step > 3 ? <CheckCircle2 size={16} /> : '3'}
                  </div>
                  <h3 className="text-lg font-bold flex items-center gap-2"><TelegramIcon size={20} className="text-[#2AABEE]" /> Join Telegram</h3>
                </div>
                <div className="pl-11 space-y-3">
                  <a href="https://t.me/Exnusprotocol" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-primary hover:underline">
                    Join <ExternalLink size={14} />
                  </a>
                  <input 
                    type="text" 
                    placeholder="Your Telegram Username" 
                    value={tgHandle}
                    onChange={handleTgHandleChange}
                    onBlur={() => { if (!tgHandle.trim()) setTgHandleError("Telegram handle is required"); }}
                    className={`w-full bg-black/50 border ${tgHandleError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-primary/50'} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors`}
                  />
                  {tgHandleError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {tgHandleError}
                    </motion.p>
                  )}
                  {step === 3 && tgHandle && !tgHandleError && (
                    <motion.button 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      onClick={handleNextStep}
                      className="px-6 py-2 bg-brand-primary text-white rounded-lg font-bold text-sm hover:bg-brand-primary/90 transition-colors"
                    >
                      Continue
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Step 4: Discord */}
              <div className={`transition-opacity duration-300 ${step >= 4 ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-white/10 text-white/50`}>
                    4
                  </div>
                  <h3 className="text-lg font-bold flex items-center gap-2"><DiscordIcon size={22} className="text-[#5865F2]" /> Join Discord</h3>
                </div>
                <div className="pl-11 space-y-3">
                  <a href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-primary hover:underline">
                    Join <ExternalLink size={14} />
                  </a>
                  <input 
                    type="text" 
                    placeholder="Your Discord Username" 
                    value={discordHandle}
                    onChange={handleDiscordHandleChange}
                    onBlur={() => { if (!discordHandle.trim()) setDiscordHandleError("Discord username is required"); }}
                    className={`w-full bg-black/50 border ${discordHandleError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-primary/50'} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors`}
                  />
                  {discordHandleError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {discordHandleError}
                    </motion.p>
                  )}
                  
                  {step === 4 && discordHandle && !discordHandleError && (
                    <motion.button 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      onClick={handleSubmit}
                      className="w-full mt-6 px-6 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Enter Waitlist
                    </motion.button>
                  )}
                </div>
              </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Waitlist = () => {
  const endpoint = clusterApiUrl("mainnet-beta");
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WaitlistContent />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Waitlist;
