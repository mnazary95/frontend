import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Video-first talent discovery
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05]">
            Stop sending
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
              lifeless PDFs.
            </span>
            <br />
            Start being seen.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            Record one short video profile. Show who you are, what you&apos;ve done, and the role
            you want. Get discovered by recruiters who already know you&apos;re worth talking to.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              Create your profile — it&apos;s free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
              Built for the roles that need real people
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              {["Sales & SDR", "Customer Success", "Hospitality", "Retail", "Early Career"].map((role) => (
                <span key={role} className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">{role}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
              Three minutes. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">One profile. Infinite reach.</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">No more applying one by one. Create your profile once, and let recruiters find you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Record your story", desc: "Film a short 30-60 second video introducing yourself, your experience, and the roles you want." },
              { step: "02", title: "Set your preferences", desc: "Choose your target roles, salary range, location, and privacy settings." },
              { step: "03", title: "Get discovered", desc: "Recruiters browse, filter, and watch your profile. When they like what they see, they reach out directly." },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-sm font-mono text-neutral-600">{item.step}</span>
                <h3 className="text-xl font-display font-semibold mt-4 mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold">Ready to be seen?</h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-lg mx-auto">Take 3 minutes. Record your profile. Let the right opportunity find you.</p>
          <Link
            href="/getting-started"
            className="mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg"
          >
            Create your profile
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
