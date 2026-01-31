import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import sara from '@/img/sara.webp'

function InPerson() {
    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/in-person'} />
                <title>In person - In time - Sara Anna Nadalini</title>
                {/* <meta name="description" content="" /> */}

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="In person - In time - Sara Anna Nadalini" />
                {/* <meta property="og:description" content="" /> */}
                <meta property="og:image" content={process.env.NEXT_PUBLIC_APP_URL + sara.src} />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/in-person'} />
            </Head>

            <Layout className="page-in-person">
                <section className="section">
                    <div className="section__container">
                        <h1>In person</h1>
                        <div className="text-center" style={{ maxWidth: 1020 }}>
                            <p>
                                Sara is a London-based visual artist and documentary film-maker currently working at Common Vision UK, where she is
                                responsible for creating and managing the think tank&rsquo;s creative and visual media output. A graduate of the
                                University of Tallinn, in 2014 she got her MA in Documentary Film from the London College of Communication (University
                                of the Arts London). Prior to moving to England, she worked on several video and photographic projects between Estonia
                                and the Middle East, focusing in particular on the issue of statelessness and on the Israeli-Palestinian conflict.
                            </p>
                            <p>
                                Would you like to collaborate on a photo/video project? Please <Link href="/in-touch">contact me!</Link>
                            </p>

                            <div style={{ maxWidth: 600, margin: 'auto' }}>
                                <Image src={sara} alt="Sara Anna Nadalini" title="Sara Anna Nadalini" priority />
                            </div>

                            <br />
                            <Link href="https://twitter.com/intent/follow?&screen_name=SarinoElu" target="_blank" className="button --twitter">
                                Follow @SarinoElu
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default InPerson
