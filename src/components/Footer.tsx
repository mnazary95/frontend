import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="font-display font-semibold text-base">
              must<span className="text-purple-400">find</span>
            </span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span>© 2026 Mustfind</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>Built for the ones who deserve to be seen</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
