import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-40 border-t border-neutral-200 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24">

        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="font-serif text-xl tracking-[0.2em]">
              CRAFTED
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              A virtual-event-first platform for discovering fashion,
              designers, and stories through a curated editorial experience.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-5 text-sm">
            <h4 className="text-neutral-900 tracking-wide">
              Explore
            </h4>

            <ul className="space-y-3 text-neutral-500">
              <li>
                <Link href="/brands" className="hover:text-black transition-colors">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-black transition-colors">
                  Pieces
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-black transition-colors">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-5 text-sm">
            <h4 className="text-neutral-900 tracking-wide">
              Account
            </h4>

            <ul className="space-y-3 text-neutral-500">
              <li>
                <Link href="/profile" className="hover:text-black transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="mt-24 pt-10 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">

          <p>
            © {new Date().getFullYear()} Crafted. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link href="#" className="hover:text-neutral-700 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neutral-700 transition-colors">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}