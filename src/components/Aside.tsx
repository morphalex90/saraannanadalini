import Menu from '@/components/Menu'
import Link from 'next/link'
import { useState } from 'react'

export default function Aside() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    return (
        <aside className={'aside' + (toggleMobileMenu ? ' --menu-open' : '')}>
            <div className="aside__container">
                <h1 className="text-center">
                    <Link href="/">Sara Anna Nadalini</Link>
                </h1>
                <button type="button" className="aside__toggle-mobile-menu" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Menu />
            </div>
        </aside>
    )
}
