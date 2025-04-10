import { ReactNode } from 'react';
import Aside from '@/components/Aside';

export default function Layout({ className, children }: { className: string, children: ReactNode }) {
    return (
        <div className={'main ' + className}>
            <Aside />
            <main id="main-content">
                {children}
            </main>
        </div>
    );
}
