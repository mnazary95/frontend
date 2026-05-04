"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              AC
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold">Your profile</h1>
              <p className="text-sm text-neutral-400">Manage your Mustfind presence</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Profile views", value: "—", desc: "Coming soon" },
            { label: "Recruiter interest", value: "—", desc: "Coming soon" },
            { label: "Profile status", value: "Draft", desc: "Complete your profile" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
            >
              <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-display font-bold mt-1">{stat.value}</p>
              <p className="text-xs text-neutral-600 mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Profile preview */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden mb-8">
          <div className="p-6 border-b border-white/[0.06]">
            <h2 className="font-display font-semibold">Profile preview</h2>
          </div>
          <div className="p-6">
            <div className="aspect-video max-w-md rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-white/5 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-purple-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500">No video uploaded yet</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500">
              Complete your onboarding to make your profile visible to recruiters.
            </p>
            <Link
              href="/getting-started"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Complete setup
            </Link>
          </div>
        </div>

        {/* Privacy settings quick link */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
          <div className="p-6 border-b border-white/[0.06]">
            <h2 className="font-display font-semibold">Privacy & visibility</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: "Visible to recruiters", status: "Yes (after setup)", color: "text-green-400" },
              { label: "Hidden from current employer", status: "Not set", color: "text-neutral-500" },
              { label: "Google indexing", status: "Not indexed — private", color: "text-blue-400" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">{item.label}</span>
                <span className={item.color}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
