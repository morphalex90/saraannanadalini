import Link from 'next/link';

function Menu() {
    return (
        <nav className="main-menu">
            <ul>
                <li><a href="https://vimeo.com/sarinoelu" target="_blank" rel="noreferrer">In motion</a></li>
                <li><a href="https://www.flickr.com/photos/saraannanadalini/with/32712368426/" target="_blank" rel="noreferrer">In pictures</a></li>
                <li><a href="https://medium.com/@SarinoElu" target="_blank" rel="noreferrer">In words</a></li>
                <li><a href="https://instagram.com/pasdecliches" target="_blank" rel="noreferrer">Instajournal</a></li>
                <li><Link href="/in-person" title="In person">In person</Link></li>
                <li><a href="https://society6.com/sarinoelu" target="_blank" rel="noreferrer">In store</a></li>
                <li><Link href="/in-touch" title="In touch">In touch</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;