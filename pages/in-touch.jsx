import Head from 'next/head';
import Layout from '@layouts/Layout';
import Image from 'next/image';

import background from '@img/form_background.png';
import Link from 'next/link';

function InTouch() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
				<title>In touch - In time</title>
				<meta name="description" content="PHP / Js Developer in love with Next.js, London based" />

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="In touch - In time" />
				<meta property="og:description" content="PHP / Js Developer in love with Next.js, London based" />
				<meta property="og:image" content="" />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
			</Head>

			<Layout className="page-in-touch">
				<section className="section">
					<div className="section__container">
						<h1>In touch</h1>

						<form className="form" style={{ background: '#d8d8d8 url(' + background.src + ')', backgroundSize: 'contain', padding: 10 }}>
							<div className="form__field">
								<label htmlFor="name">Your name *</label>
								<input type="text" name="name" id="name" value="" placeholder="Jon Doe" required />
							</div>

							<div className="form__field">
								<label htmlFor="email">Your email *</label>
								<input type="email" name="email" id="email" value="" placeholder="jon@doe.com" required />
							</div>

							<div className="form__field">
								<label htmlFor="subject">Subject</label>
								<input type="text" name="subject" id="subject" value="" placeholder="jon@doe.com" />
							</div>

							<div className="form__field">
								<label htmlFor="message">Your message *</label>
								<textarea name="message" id="message" value="" placeholder="Message to Jon Doe" cols="40" rows="10" ></textarea>
							</div>

							<button className="button" type="submit">Make a contact</button>
						</form>
					</div>

				</section>
			</Layout>
		</>
	);
}

export default InTouch;