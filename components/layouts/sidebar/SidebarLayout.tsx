import Link from 'next/link'

export interface ISidebarLayout {}

const SidebarLayout = () => {
    return (
        <nav>
            <input placeholder="Search..." />
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </nav>
    );
}

export default SidebarLayout
