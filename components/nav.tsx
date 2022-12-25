import { useRouter } from 'next/router'
import Link from 'next/link'

import NavLink from './navLink'

function Nav() {
  return (
    <nav className="space-y-4">
      <Link href="/">
        <a className="text-stone-100 font-hammersmith mb-4 hover:text-stone-100">
          Zaid Mukaddam
        </a>
      </Link>

      <div className="flex flex-col">
        <NavLink title="life" path="/life" />

        <NavLink title="words" />
      </div>
    </nav>
  )
}

export default Nav
