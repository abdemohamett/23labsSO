'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileText, 
  Trash2, 
  Mail, 
  Lock, 
  BookOpen, 
  UserCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ExternalLink, 
  Sparkles,
  ChevronRight,
  Database,
  Smartphone,
  EyeOff
} from 'lucide-react';
import { Footer } from '@/components/ui/footer';

export default function AqeelPolicyPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'deletion'>('privacy');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@23labs.site');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to 23labs</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/10">
              <Image 
                src="/prev -images/aqeellogo.png" 
                alt="Aqeel Logo" 
                width={32} 
                height={32} 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="font-semibold text-white tracking-tight text-base">Aqeel Legal Center</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Google Play Compliant
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-8 py-12">
        {/* Page Hero */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-zinc-300 font-medium">Aqeel by 23labs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-4 text-balance">
            Privacy Policy & Legal Terms
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Transparent data policies for <strong className="text-white">Aqeel</strong> — the Quran memorization and spaced repetition app. Last updated: <span className="text-zinc-200 font-medium">September 18, 2026</span>.
          </p>

          {/* Tab Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-900/90 rounded-2xl border border-white/10 max-w-xl w-full shadow-2xl">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'privacy'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'terms'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => setActiveTab('deletion')}
              className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'deletion'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>Data Deletion</span>
            </button>
          </div>
        </div>

        {/* Tab 1: PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-8 bg-zinc-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold text-white tracking-tight">Privacy Policy</h2>
              </div>
              <p className="text-zinc-400 text-sm">
                This document outlines how 23labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your information when you use the Aqeel mobile application and website.
              </p>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                <EyeOff className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-semibold text-white">No Data Sales</h4>
                <p className="text-xs text-zinc-400">We never sell, rent, or monetize your personal information or study progress.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-semibold text-white">Encrypted & Secure</h4>
                <p className="text-xs text-zinc-400">All data in transit is protected using HTTPS/TLS encryption and stored securely.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                <UserCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-semibold text-white">Full User Control</h4>
                <p className="text-xs text-zinc-400">Delete your account and ALL associated cloud data at any time with one click.</p>
              </div>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">1</span>
                Information We Collect
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                When you register for and use Aqeel, we collect specific categories of data necessary to deliver spaced repetition Quran memorization tracking and account synchronization:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-400 pl-2">
                <li><strong className="text-zinc-200">Account Credentials:</strong> Email address, display name, and authentication tokens provided when registering via email or Google Sign-In (OAuth).</li>
                <li><strong className="text-zinc-200">Quran Memorization Progress:</strong> Surah and Ayah memorization status, review frequency, spaced repetition recall scores, study streaks, and revision timestamps.</li>
                <li><strong className="text-zinc-200">Device & Diagnostic Information:</strong> Operating system, device model, app version, IP address, and crash reports to maintain app stability.</li>
                <li><strong className="text-zinc-200">Payment Information:</strong> For in-app subscriptions processed via mobile wallets (EVC Plus, ZAAD, Sahal, M-Pesa, or WaafiPay), transactions are processed directly by licensed financial payment gateways. We store transaction IDs, timestamp, and subscription expiration status. We never collect or store your mobile money PIN.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">2</span>
                How We Use Your Information
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                We strictly use your information for core app operational purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Synchronizing Quran revision progress across mobile & web devices.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Calculating optimal spaced repetition recall intervals.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Managing user authentication and free trial/subscription entitlements.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Responding to support requests and bug reports.</span>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">3</span>
                Third-Party Services & Data Sharing
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                We do not sell your personal data. We rely on trusted third-party service providers solely to operate Aqeel securely:
              </p>
              <div className="space-y-2 text-sm text-zinc-400">
                <p><strong className="text-zinc-200">Google OAuth & Services:</strong> Used for secure user authentication via OAuth 2.0.</p>
                <p><strong className="text-zinc-200">WaafiPay & Mobile Payment Networks:</strong> Used securely to process mobile wallet subscription payments (EVC Plus, ZAAD, Sahal, M-Pesa).</p>
                <p><strong className="text-zinc-200">Cloud Infrastructure:</strong> Secure cloud servers used for database hosting and progress synchronization.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">4</span>
                Children&apos;s Privacy (COPPA & GDPR)
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Aqeel is an educational app for Quran memorization suitable for users of all ages. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you believe a child has provided us with personal information, please contact us at <a href="mailto:contact@23labs.site" className="text-emerald-400 underline">contact@23labs.site</a> for immediate deletion.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">5</span>
                Data Retention & Security
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                We implement industry-standard encryption protocols (TLS/SSL) for all data transfers. Your data is retained only for as long as your account remains active. When you delete your account, your data is permanently scrubbed from our systems.
              </p>
            </section>

            {/* Contact Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-white">Have questions about our privacy practices?</h4>
                <p className="text-xs text-zinc-400 mt-1">Our team is happy to assist you with any privacy or data rights inquiries.</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition-colors flex items-center gap-2 shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Email Copied!' : 'contact@23labs.site'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: TERMS OF SERVICE */}
        {activeTab === 'terms' && (
          <div className="space-y-8 bg-zinc-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold text-white tracking-tight">Terms of Service</h2>
              </div>
              <p className="text-zinc-400 text-sm">
                These Terms of Service govern your access to and use of the Aqeel app provided by 23labs.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">1. Acceptance of Terms</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                By downloading, installing, or using Aqeel, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">2. License & Intellectual Property</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                23labs grants you a limited, non-exclusive, non-transferable, revocable license to use Aqeel for personal Quran memorization and educational purposes.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The Quran text and translations provided within the app belong to public domain or their respective licensed sources. The application interface, design, spaced repetition algorithms, branding, and code remain the exclusive property of 23labs.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">3. User Accounts</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                You are responsible for maintaining the security of your account credentials. 23labs is not liable for any unauthorized activity resulting from your failure to safeguard your account.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">4. Subscriptions & Access</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Aqeel offers fixed-duration access plans (1 Month, 3 Months, Yearly) accessible via integrated mobile payment gateways (EVC Plus, ZAAD, Sahal, M-Pesa, or WaafiPay). Plans provide full access for the selected duration without auto-renewal. Users can renew manually at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">5. Limitation of Liability</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Aqeel is provided &quot;AS IS&quot; without warranties of any kind. 23labs is not liable for indirect, incidental, or consequential damages resulting from app availability or data loss.
              </p>
            </section>
          </div>
        )}

        {/* Tab 3: DATA & ACCOUNT DELETION */}
        {activeTab === 'deletion' && (
          <div className="space-y-8 bg-zinc-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <Trash2 className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold text-white tracking-tight">Account & Data Deletion Guide</h2>
              </div>
              <p className="text-zinc-400 text-sm">
                In compliance with Google Play User Data policies, Aqeel provides two convenient ways to permanently delete your account and remove all personal data.
              </p>
            </div>

            {/* In-App Deletion Steps */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Method 1: Direct In-App Account Deletion</h3>
                  <p className="text-xs text-zinc-400">Instant deletion directly from inside the Aqeel app.</p>
                </div>
              </div>

              <ol className="space-y-3 text-sm text-zinc-300 pl-4 list-decimal list-inside">
                <li>Open the <strong className="text-white">Aqeel app</strong> on your mobile device.</li>
                <li>Navigate to <strong className="text-white">Settings</strong> (gear icon).</li>
                <li>Select <strong className="text-white">Account & Profile</strong>.</li>
                <li>Tap <strong className="text-red-400">Delete Account</strong> and confirm the action.</li>
              </ol>
              <p className="text-xs text-zinc-400 italic pt-1">
                Note: Upon confirmation, your profile, memorization progress, spaced repetition stats, and synced cloud records will be deleted immediately.
              </p>
            </div>

            {/* Email Request Method */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Method 2: Web & Support Email Request</h3>
                  <p className="text-xs text-zinc-400">Request account removal via email if you uninstalled the app.</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                If you no longer have access to the app, you can request account deletion by emailing us from your registered account email:
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 text-xs font-mono">
                <p><span className="text-zinc-500">To:</span> <span className="text-emerald-400">contact@23labs.site</span></p>
                <p><span className="text-zinc-500">Subject:</span> Aqeel Account Deletion Request</p>
                <p><span className="text-zinc-500">Body:</span> Please permanently delete my Aqeel account and all associated user data for registered email [your-email@example.com].</p>
              </div>

              <p className="text-xs text-zinc-400">
                Email deletion requests are processed within <strong>5 to 7 business days</strong>. You will receive an email confirmation once data removal is complete.
              </p>
            </div>

            {/* Data Purged Summary */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
              <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Data Removed During Deletion
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Personal Account & Email Records
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Quran Memorization & Revision Logs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Spaced Repetition Flashcard Schedules
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Cloud Backups & Device Sessions
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
