import { useState } from 'react';
import Head from 'next/head';
import Layout from '@layouts/Layout';

import background from '@img/form_background.png';
import sara from '@img/sara.webp';

function InTouch() {

	const [contact, setContact] = useState({ name: '', email: '', message: '' });
	const [response, setResponse] = useState('');
	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	}

	const handlePress = (e) => {
		e.preventDefault();

		fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: contact.name, email: contact.email, message: contact.message })
		})
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				setResponse(data.success === true ? 'Thank you! I\'ll get back to you shortly' : 'There was an error, please try again');
			})
			.catch(error => {
				console.error(error.toString());
				setResponse('There was an error, please try again');
			});
	}

	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/in-touch'} />
				<title>In touch - In time - Sara Anna Nadalini</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="In touch - In time - Sara Anna Nadalini" />
				{/* <meta property="og:description" content="" /> */}
				<meta property="og:image" content={process.env.NEXT_PUBLIC_APP_URL + sara.src} />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/in-touch'} />
			</Head>

			<Layout className="page-in-touch">
				<section className="section">
					<div className="section__container">
						<h1>In touch</h1>

						<form className="form" onSubmit={handlePress} style={{ background: '#d8d8d8 url(' + background.src + ')', backgroundSize: 'contain', padding: 10 }}>
							<div className="form__field">
								<label htmlFor="name">Your name *</label>
								<input type="text" name="name" id="name" placeholder="Jon Doe" onChange={handleChange} required />
							</div>

							<div className="form__field">
								<label htmlFor="email">Your email *</label>
								<input type="email" name="email" id="email" placeholder="jon@doe.com" onChange={handleChange} required />
							</div>

							<div className="form__field">
								<label htmlFor="message">Your message *</label>
								<textarea name="message" id="message" placeholder="Message to Jon Doe" onChange={handleChange} cols="40" rows="10"></textarea>
							</div>

							<button className="button" type="submit">Make a contact</button>
						</form>

						<div style={{ marginTop: 20 }} >{response}</div>
					</div>

				</section>
			</Layout>
		</>
	);
}

export default InTouch;