import Head from 'next/head';
import Layout from '@layouts/Layout';

function Homepage() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
				<title>Sara Anna Nadalini - In time</title>
				<meta name="description" content="PHP / Js Developer in love with Next.js, London based" />

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Sara Anna Nadalini - In time" />
				<meta property="og:description" content="PHP / Js Developer in love with Next.js, London based" />
				<meta property="og:image" content="" />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
			</Head>

			<Layout className="page-homepage">
				<section className="section" style={{ position: 'relative', paddingTop: '56%' }}>
					{/* style={{ height: 'calc(100vh - 57px - 26px)' }} */}
					<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://player.vimeo.com/video/232340480" width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullscreen></iframe>
				</section>
			</Layout>
		</>
	);
}

export default Homepage;