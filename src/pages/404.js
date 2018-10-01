import React from 'react';
import Layout from '../layouts/index.js';
import Link from 'gatsby-link';

const NotFoundPage = () => (
	<Layout>
		<div className="h-screen bg-honeydew flex flex-col justify-center items-center lg:ml-8 lg:-mr-32 font-bold tracking-wide">
			<i class="fas fa-low-vision text-2xl mb-2" />
			<p className="text-gunmetal text-xl">404</p>
			<p className="text-gunmetal m-6 text-center">There's nothing here yet... but you can still check out this stuff:</p>
			<div className="w-64 flex justify-between mt-6">
				<Link
					to="/releases"
					className="my-2 shadow-outline py-1 px-3 rounded no-underline bg-lilac hover:bg-lavendar text-gunmetal">
					Releases
				</Link>
				<Link
					to="/contact"
					className="my-2 shadow-outline py-1 px-3 rounded no-underline bg-lilac hover:bg-lavendar text-gunmetal">
					Contact
				</Link>
			</div>
		</div>
	</Layout>
);

export default NotFoundPage;
