import Link from "next/link";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <Link href="/">Sara Anna Nadalini</Link>
                </div>

                <div className="footer__copy">
                    <p>{new Date().getFullYear()} &copy; Sara Anna Nadalini. Made with &hearts; in London</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;