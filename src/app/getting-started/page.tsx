"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ProfileData = {
  name: string;
  email: string;
  currentTitle: string;
  yearsExp: string;
  targetRoles: string[];
  preferredIndustries: string[];
  skills: string;
  salaryMin: string;
  salaryMax: string;
  location: string;
  remotePreference: string;
  workAuthorization: string;
  availability: string;
  linkedin: string;
  videoUrl: string;
  achievements: string[];
  // Privacy
  hideFromCurrentEmployer: boolean;
  currentEmployerName: string;
  anonymousMode: boolean;
};

const roles = [
  "Sales Development Rep (SDR)",
  "Business Development Rep (BDR)",
  "Account Executive (AE)",
  "Customer Success Manager",
  "Account Manager",
  "Retail Associate",
  "Hospitality Staff",
  "Marketing Associate",
  "Community Manager",
  "Customer Support",
  "Operations Associate",
  "Other",
];

const industries = [
  "SaaS / Technology",
  "E-commerce",
  "Financial Services",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Professional Services",
  "Manufacturing",
  "Real Estate",
  "Education",
  "Logistics",
  "Other",
];

const stepsConfig = [
  { id: "welcome", label: "Welcome" },
  { id: "basics", label: "About you" },
  { id: "target", label: "What you want" },
  { id: "video", label: "Your video" },
  { id: "privacy", label: "Privacy" },
  { id: "done", label: "You're live" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function GettingStarted() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    email: "",
    currentTitle: "",
    yearsExp: "",
    targetRoles: [],
    preferredIndustries: [],
    skills: "",
    salaryMin: "",
    salaryMax: "",
    location: "",
    remotePreference: "remote",
    workAuthorization: "",
    availability: "",
    linkedin: "",
    videoUrl: "",
    achievements: [""],
    hideFromCurrentEmployer: false,
    currentEmployerName: "",
    anonymousMode: false,
  });

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, stepsConfig.length - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const update = (field: keyof ProfileData, value: any) => {
    setProfile((p) => ({ ...p, [field]: value }));
  };

  const toggleArray = (field: "targetRoles" | "preferredIndustries", value: string) => {
    setProfile((p) => ({
      ...p,
      [field]: p[field].includes(value)
        ? p[field].filter((v) => v !== value)
        : [...p[field], value],
    }));
  };

  const progress = ((step) / (stepsConfig.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-black pt-20 pb-20">
      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-neutral-900">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Step indicators */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-2">
        <div className="flex justify-between">
          {stepsConfig.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= step
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/25"
                    : "bg-neutral-800"
                }`}
              />
              <span
                className={`text-[10px] mt-1.5 transition-colors ${
                  i <= step ? "text-neutral-400" : "text-neutral-700"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-2xl mx-auto px-4 mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {step === 0 && <WelcomeStep onNext={goNext} />}
            {step === 1 && (
              <BasicsStep
                profile={profile}
                update={update}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {step === 2 && (
              <TargetStep
                profile={profile}
                update={update}
                toggleArray={toggleArray}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {step === 3 && (
              <VideoStep
                profile={profile}
                update={update}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {step === 4 && (
              <PrivacyStep
                profile={profile}
                update={update}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {step === 5 && <DoneStep profile={profile} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 0: WELCOME
   ═══════════════════════════════════════════════ */
function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center">
      <motion.div
        className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 items-center justify-center mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <span className="text-white font-bold text-3xl">M</span>
      </motion.div>
      <motion.h1
        className="text-4xl sm:text-5xl font-display font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        You&apos;re{" "}
        <span className="text-gradient">3 minutes</span>
        <br />
        from getting discovered.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        We&apos;ll help you build a profile that shows who you really are. No PDF required.
        Just you, your story, and the roles you want.
      </motion.p>

      <motion.div
        className="mt-12 grid sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { icon: "👤", title: "Your info", desc: "Name, experience, what you do" },
          { icon: "🎯", title: "Your targets", desc: "Roles, salary, location" },
          { icon: "🎬", title: "Your video", desc: "30 second intro, your way" },
        ].map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
          >
            <span className="text-xl">{item.icon}</span>
            <p className="text-sm font-medium mt-2">{item.title}</p>
            <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
        >
          Let&apos;s go
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="mt-4 text-xs text-neutral-600">
          Takes about 3 minutes. You can always edit later.
        </p>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 1: BASICS
   ═══════════════════════════════════════════════ */
function BasicsStep({
  profile,
  update,
  onNext,
  onBack,
}: {
  profile: ProfileData;
  update: (f: keyof ProfileData, v: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid = profile.name && profile.email && profile.currentTitle;
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">Who are you?</h2>
        <p className="mt-2 text-neutral-400">
          Start with the basics. We keep it simple.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">Full name *</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Alex Chen"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email *</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="alex@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
            Current or most recent title *
          </label>
          <input
            type="text"
            value={profile.currentTitle}
            onChange={(e) => update("currentTitle", e.target.value)}
            placeholder="Sales Development Representative"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
            Years of experience
          </label>
          <select
            value={profile.yearsExp}
            onChange={(e) => update("yearsExp", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          >
            <option value="" className="bg-black">Select...</option>
            <option value="0-1" className="bg-black">Less than 1 year</option>
            <option value="1-2" className="bg-black">1-2 years</option>
            <option value="3-5" className="bg-black">3-5 years</option>
            <option value="6-10" className="bg-black">6-10 years</option>
            <option value="10+" className="bg-black">10+ years</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            isValid
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
              : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 2: TARGET
   ═══════════════════════════════════════════════ */
function TargetStep({
  profile,
  update,
  toggleArray,
  onNext,
  onBack,
}: {
  profile: ProfileData;
  update: (f: keyof ProfileData, v: any) => void;
  toggleArray: (f: "targetRoles" | "preferredIndustries", v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid = profile.targetRoles.length > 0 && profile.location;
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">What do you want?</h2>
        <p className="mt-2 text-neutral-400">
          Help recruiters find you for the right opportunities.
        </p>
      </div>

      <div className="space-y-7">
        {/* Target roles */}
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-3">
            Target roles * (select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => toggleArray("targetRoles", role)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                  profile.targetRoles.includes(role)
                    ? "bg-purple-500/15 border-purple-500/40 text-purple-300"
                    : "bg-white/[0.02] border-white/[0.08] text-neutral-400 hover:border-white/20"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-3">
            Preferred industries
          </label>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => toggleArray("preferredIndustries", ind)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                  profile.preferredIndustries.includes(ind)
                    ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300"
                    : "bg-white/[0.02] border-white/[0.08] text-neutral-400 hover:border-white/20"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Location & remote */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              Location *
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="Toronto, ON"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              Remote preference
            </label>
            <select
              value={profile.remotePreference}
              onChange={(e) => update("remotePreference", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
            >
              <option value="remote" className="bg-black">Remote</option>
              <option value="hybrid" className="bg-black">Hybrid</option>
              <option value="on-site" className="bg-black">On-site</option>
              <option value="open" className="bg-black">Open to anything</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              Min salary (CAD)
            </label>
            <input
              type="text"
              value={profile.salaryMin}
              onChange={(e) => update("salaryMin", e.target.value)}
              placeholder="60,000"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              Max salary (CAD)
            </label>
            <input
              type="text"
              value={profile.salaryMax}
              onChange={(e) => update("salaryMax", e.target.value)}
              placeholder="80,000"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
            Skills (comma separated)
          </label>
          <input
            type="text"
            value={profile.skills}
            onChange={(e) => update("skills", e.target.value)}
            placeholder="Cold outreach, Salesforce, HubSpot, Prospecting"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            isValid
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
              : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 3: VIDEO
   ═══════════════════════════════════════════════ */
function VideoStep({
  profile,
  update,
  onNext,
  onBack,
}: {
  profile: ProfileData;
  update: (f: keyof ProfileData, v: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [hasRecorded, setHasRecorded] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">Show yourself</h2>
        <p className="mt-2 text-neutral-400">
          Record a short video introducing yourself. 30-60 seconds is all you need.
        </p>
      </div>

      {/* Video prompt */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/20 mb-6">
        <p className="text-sm text-purple-300 font-medium mb-2">Your script prompt:</p>
        <p className="text-sm text-neutral-300 leading-relaxed">
          &ldquo;Tell us who you are, what you&apos;ve done, the roles you&apos;re looking for, one
          achievement you&apos;re proud of, and what kind of company you want next.&rdquo;
        </p>
      </div>

      {/* Video upload area */}
      <div
        className={`aspect-video rounded-2xl border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
          hasRecorded
            ? "border-green-500/30 bg-green-500/5"
            : "border-white/[0.08] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5"
        }`}
      >
        <div className="text-center p-8">
          {hasRecorded ? (
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-400 font-medium">Video recorded!</p>
              <p className="text-sm text-neutral-500">You can re-record if you want.</p>
              <button
                onClick={() => setHasRecorded(false)}
                className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-2"
              >
                Record again
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-4.553a1 1 0 00-.895-1.447H5.342a1 1 0 00-.895 1.447L4 10m4 4h8m-8 4h8" />
                </svg>
              </div>
              <p className="text-neutral-300 font-medium">Record or upload your video</p>
              <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                Use your phone camera or computer webcam. Retake as many times as you want.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setHasRecorded(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Record now
                </button>
                <button
                  onClick={() => setHasRecorded(true)}
                  className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 hover:border-white/20 transition-all text-sm"
                >
                  Upload file
                </button>
              </div>
              <p className="text-xs text-neutral-600">Max 60 seconds • MP4 or MOV • Phone or webcam</p>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-neutral-300 mb-3">
          Key achievements (optional but recommended)
        </label>
        <div className="space-y-3">
          {profile.achievements.map((ach, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={ach}
                onChange={(e) => {
                  const newAch = [...profile.achievements];
                  newAch[i] = e.target.value;
                  update("achievements", newAch);
                }}
                placeholder={`e.g. "Closed $500k in new business in Q1"`}
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
              />
              {profile.achievements.length > 1 && (
                <button
                  onClick={() => {
                    const newAch = profile.achievements.filter((_, j) => j !== i);
                    update("achievements", newAch);
                  }}
                  className="text-neutral-500 hover:text-red-400 transition-colors px-2"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => update("achievements", [...profile.achievements, ""])}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            + Add another achievement
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 4: PRIVACY
   ═══════════════════════════════════════════════ */
function PrivacyStep({
  profile,
  update,
  onNext,
  onBack,
}: {
  profile: ProfileData;
  update: (f: keyof ProfileData, v: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">
          You&apos;re in control.
        </h2>
        <p className="mt-2 text-neutral-400">
          Set your privacy preferences. Only you decide who sees your profile.
        </p>
      </div>

      <div className="space-y-6">
        {/* Block current employer */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={profile.hideFromCurrentEmployer}
              onChange={(e) => update("hideFromCurrentEmployer", e.target.checked)}
              className="mt-1 w-5 h-5 rounded-md border-white/20 bg-white/[0.05] accent-purple-500"
            />
            <div>
              <p className="font-medium text-sm">Hide from my current employer</p>
              <p className="text-xs text-neutral-500 mt-1">
                Your current company won&apos;t be able to find or view your profile.
              </p>
            </div>
          </label>
          {profile.hideFromCurrentEmployer && (
            <input
              type="text"
              value={profile.currentEmployerName}
              onChange={(e) => update("currentEmployerName", e.target.value)}
              placeholder="Enter your current employer name..."
              className="mt-3 w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-purple-500/50"
            />
          )}
        </div>

        {/* Anonymous mode */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={profile.anonymousMode}
              onChange={(e) => update("anonymousMode", e.target.checked)}
              className="mt-1 w-5 h-5 rounded-md border-white/20 bg-white/[0.05] accent-purple-500"
            />
            <div>
              <p className="font-medium text-sm">Anonymous mode</p>
              <p className="text-xs text-neutral-500 mt-1">
                Your profile shows up in search results, but your name and photo are hidden
                until you approve a recruiter&apos;s interest.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Privacy note */}
      <div className="mt-6 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-7.5V7a1 1 0 00-1-1H6a1 1 0 00-1 1v2.5" />
          </svg>
          <div>
            <p className="text-sm text-neutral-300 font-medium">Your privacy matters</p>
            <p className="text-xs text-neutral-500 mt-1">
              Your profile is visible to recruiters only — not publicly indexed by Google. You can
              revoke visibility at any time from your dashboard.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          Publish my profile
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 5: DONE
   ═══════════════════════════════════════════════ */
function DoneStep({ profile }: { profile: ProfileData }) {
  return (
    <div className="text-center">
      {/* Success animation */}
      <motion.div
        className="inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 items-center justify-center mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
      >
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl font-display font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        You&apos;re live, {profile.name.split(" ")[0]}!
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-neutral-400 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Your profile is now visible to recruiters. They&apos;ll find you when they search for
        roles like{" "}
        <span className="text-purple-300 font-medium">
          {profile.targetRoles[0] || "your target roles"}
        </span>
        .
      </motion.p>

      {/* Profile summary */}
      <motion.div
        className="mt-10 max-w-sm mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="font-medium text-sm">{profile.name}</p>
            <p className="text-xs text-neutral-500">{profile.currentTitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.targetRoles.slice(0, 3).map((role) => (
            <span
              key={role}
              className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
            >
              {role}
            </span>
          ))}
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400">
            {profile.location}
          </span>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
        >
          Go to my dashboard
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <p className="text-xs text-neutral-600">
          Edit your profile anytime from your dashboard.
        </p>
      </motion.div>
    </div>
  );
}
