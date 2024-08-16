import Head from 'next/head';
import Layout from '@/components/Layout';

function InPerson() {
	return (
		<>
			<Head>
				{/* <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} /> */}
				<title>404 - In time - Sara Anna Nadalini</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="404 - In time - Sara Anna Nadalini" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content={process.env.NEXT_PUBLIC_APP_URL + sara.src} /> */}
				{/* <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} /> */}
			</Head>

			<Layout className="page-in-person">
				<section className="section">
					<div className="section__container">
						<h1 className="text-center">404 - Page not found</h1>
						<div className="text-center">
							<p>We couldn&rsquo;t find what you were looking for, please try again</p>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default InPerson;