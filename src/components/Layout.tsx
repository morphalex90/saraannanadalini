import Aside from '@/components/Aside'
import { ReactNode } from 'react'

export default function Layout({ className, children }: { className: string; children: ReactNode }) {
    return (
        <div className={'main ' + className}>
            <Aside />
            <main id="main-content">{children}</main>
        </div>
    )
}
