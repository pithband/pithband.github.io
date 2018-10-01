import React from 'react';
import Layout from '../layouts/index.js';

const ContactPage = () => (
	<Layout>
		<div className="w-full h-screen bg-honeydew flex justify-center items-center">
			<form className="mx-2 xs:w-2/3 md:w-1/2 lg:w-1/3"
        method="POST"
        action={`https://formspree.io/contact@pith.band`}>
				<div className="text-gunmetal text-2xl flex my-6">
					<i className="far fa-paper-plane" />
					<p className="ml-4">Contact</p>
				</div>

				<label
					className="block font-bold mb-4 text-gunmetal text-xs uppercase"
					htmlFor="first-name">
					First Name
				</label>
				<input
					className="block bg-grey-lighter mb-6 p-3 rounded text-gunmetal w-full shadow-outline"
					id="first-name"
					type="text"
          name="name"
					placeholder="Name"
				/>

				<label className="block font-bold mb-4 text-xs uppercase" htmlFor="last-name">
					Email
				</label>
				<input
          className="block bg-grey-lighter mb-6 p-3 rounded text-gunmetal w-full shadow-outline"
					id="email"
					type="text"
          name="email"
					placeholder="example@email.com"
				/>

				<label className="block font-bold mb-4 text-xs uppercase" htmlFor="message">
					Message
				</label>
				<textarea
          className="block bg-grey-lighter mb-6 p-3 rounded text-gunmetal w-full shadow-outline"
					placeholder="Say something..."
          name="message"
					rows="8"
				/>

				<button className="shadow-outline bg-lilac hover:bg-lavendar font-bold px-6 py-3 rounded text-sm text-gunmetal">
					Submit
				</button>
			</form>
		</div>
	</Layout>
);

export default ContactPage;
