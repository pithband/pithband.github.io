import React from 'react';
import Layout from '../layouts/index.js';
import Link from 'gatsby-link';

const IndexPage = () => (
	<Layout>
		<div className="h-screen bg-honeydew flex flex-col justify-center items-center">
			<p className="text-gunmetal text-xl">Pith</p>
			<p className="text-gunmetal m-6 text-center">
				Site under construction - follow the links below or check back soon for more content
			</p>
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

export default IndexPage;
