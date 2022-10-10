// import { useState, useEffect } from 'react';

import Aside from '@layouts/Aside';
// import Footer from '@layouts/Footer';

export default function Layout(props) {

    // useEffect(() => {
    // }, []);

    return (
        <div className={'main ' + props.className}>
            <Aside />

            <main id="main-content">
                {props.children}
            </main>

            {/* <Footer /> */}
        </div>
    );
}
