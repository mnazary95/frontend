"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
} as Variants;

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <>
      {/* ════════════════════════════════════════════════
             HERO SECTION
          ════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Video-first talent discovery
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05]"
            >
              Stop sending
              <br />
              <span className="text-gradient">lifeless PDFs.</span>
              <br />
              Start being seen.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            >
              Record one short video profile. Show who you are, what you&apos;ve done, and the role
              you want. Get discovered by recruiters who already know you&apos;re worth talking to.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/getting-started"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                Create your profile — it&apos;s free
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/80 hover:border-white/20 hover:text-white transition-all duration-200 font-medium"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-16">
              <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
                Built for the roles that need real people
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
                {["Sales & SDR", "Customer Success", "Hospitality", "Retail", "Early Career"].map(
                  (role) => (
                    <span
                      key={role}
                      className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════ */}
      <section id="how-it-works" className="relative py-32">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
              Three minutes.
              <br />
              <span className="text-gradient">One profile. Infinite reach.</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">
              No more applying one by one. Create your profile once, and let recruiters find you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record your story",
                desc: "Film a short 30-60 second video introducing yourself, your experience, and the roles you want. Retake as many times as you like.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-4.553a1 1 0 00-.895-1.447H5.342a1 1 0 00-.895 1.447L4 10m4 4h8m-8 4h8" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Set your preferences",
                desc: "Choose your target roles, salary range, location, and privacy settings. Block your current employer from seeing you.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Get discovered",
                desc: "Recruiters browse, filter, and watch your profile. When they like what they see, they reach out directly. No spam, no noise.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/10 flex items-center justify-center text-purple-400">
                    {item.icon}
                  </div>
                  <span className="text-sm font-mono text-neutral-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOR CANDIDATES
      ════════════════════════════════════════════════ */}
      <section id="for-candidates" className="relative py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
                For candidates
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight leading-tight">
                Your resume can&apos;t show
                <br />
                <span className="text-gradient">who you really are.</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
                A PDF tells them what you did. A 30-second video tells them who you are — your
                energy, your communication, your confidence. The things that actually get you hired.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Record once, get discovered by hundreds of recruiters",
                  "Privacy controls — block your current employer",
                  "No more repetitive applications for the same info",
                  "Stand out before the interview stage",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-neutral-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/getting-started"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Create your free profile
              </Link>
            </motion.div>

            {/* Visual - mock profile card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-transparent p-8 border border-white/[0.06] glow">
                <div className="relative z-10 space-y-4">
                  {/* Video thumbnail */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Candidate info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600" />
                      <div>
                        <p className="font-semibold">Alex Chen</p>
                        <p className="text-sm text-neutral-400">
                          Sales Development Representative
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["B2B SaaS", "$85K", "Remote", "4yr exp"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOR RECRUITERS (TEASER)
      ════════════════════════════════════════════════ */}
      <section id="for-recruiters" className="relative py-32 bg-white/[0.005]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
              For recruiters
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight leading-tight">
              Stop screening PDFs.
              <br />
              <span className="text-gradient">Start screening people.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
              Filter, browse, and watch candidate profiles. Know who you&apos;re talking to before
              you pick up the phone. Recruiter tools coming soon.
            </p>
          </motion.div>

          {/* Coming soon card */}
          <motion.div
            className="max-w-lg mx-auto text-center p-12 rounded-2xl border border-dashed border-white/10 bg-white/[0.02]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-12 h-12 text-indigo-400/50 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Recruiter dashboard coming soon</h3>
            <p className="text-neutral-400 text-sm">
              We&apos;re building the recruiter experience now. In the meantime, candidates are
              creating profiles. Be first in line when we launch.
            </p>
            <button className="mt-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-all text-sm font-medium">
              Join the waitlist
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════ */}
      <section className="relative py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-bold tracking-tight">
              Questions?
            </h2>
            <p className="mt-4 text-neutral-400">Everything you need to know about Mustfind.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                q: "Is it really free for candidates?",
                a: "Yes. Creating your profile, recording your video, and being discovered by recruiters is completely free. We'll eventually offer premium features, but the core is always free.",
              },
              {
                q: "Can my current employer see my profile?",
                a: "Absolutely not. You can block your current employer (and any company you want) from seeing your profile. We take privacy seriously.",
              },
              {
                q: "How long should my video be?",
                a: "30-60 seconds is the sweet spot. Short enough for recruiters to watch, long enough to show who you are. You can retake as many times as you want.",
              },
              {
                q: "What kind of roles is this best for?",
                a: "Any role where communication, presence, and personality matter — sales, customer success, hospitality, retail, and early career roles. If a recruiter cares about who you are, not just what you've done, this is for you.",
              },
              {
                q: "When will recruiter features be available?",
                a: "We're building them now. Right now we're focused on getting great candidates on the platform first. Recruiters will be able to browse, filter, and reach out soon.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl bg-white/[0.02] border border-white/[0.06] open:border-purple-500/20 transition-all duration-300"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-medium text-sm">{faq.q}</span>
                  <svg
                    className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight leading-tight">
            Ready to be seen?
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-lg mx-auto">
            Take 3 minutes. Record your profile. Let the right opportunity find you.
          </p>
          <Link
            href="/getting-started"
            className="mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            Create your profile
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
