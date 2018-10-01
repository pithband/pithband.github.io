import React from 'react';
import Layout from '../layouts/index.js';

const ContactPage = () => (
	<Layout>
		<div className="h-16 text-gunmetal md:text-2xl xs:text-lg pin-t fixed bg-bud shadow-outline w-screen xs:my-16 lg:my-0 flex items-center justify-center font-bold tracking-wide">
			<div className="flex xs:mr-8 lg:ml-32 lg:-mr-4">
				<i className="far fa-paper-plane" />
				<p className="ml-4">Contact</p>
			</div>
		</div>
		<div className="w-screen h-screen bg-honeydew flex flex-row items-center justify-center md:mt-10 lg:mt-0">
			<form
				className="xs:w-2/3 md:w-1/2 lg:w-1/3 xs:mt-24 md:mt-0 lg:ml-32 lg:-mr-16"
				method="POST"
				action={`https://formspree.io/contact@pith.band`}>
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
					required
				/>

        <label className="block font-bold mb-4 text-gunmetal text-xs uppercase" htmlFor="last-name">
					Email
				</label>
				<input
					className="block bg-grey-lighter mb-6 p-3 rounded text-gunmetal w-full shadow-outline"
					id="email"
					type="text"
					name="email"
					placeholder="example@email.com"
					required
				/>

        <label className="block font-bold mb-4 text-gunmetal text-xs uppercase" htmlFor="message">
					Message
				</label>
				<textarea
					className="block bg-grey-lighter mb-6 p-3 rounded text-gunmetal w-full shadow-outline"
					placeholder="Say something..."
					name="message"
					rows="8"
					required
				/>

				<button className="shadow-outline bg-lilac hover:bg-lavendar font-bold px-6 py-3 rounded text-sm text-gunmetal">
					Submit
				</button>
			</form>
		</div>
	</Layout>
);

export default ContactPage;
