import { useState } from 'react';
import Link from 'next/link';
import Menu from '@/components/Menu';

function Aside() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    return (
        <aside className={'aside' + (toggleMobileMenu ? ' --menu-open' : '')}>
            <div className="aside__container">
                <h1 className="text-center"><Link href="/">Sara Anna Nadalini</Link></h1>
                <button type="button" className="aside__toggle-mobile-menu" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Menu />
            </div>
        </aside>
    );
}

export default Aside;