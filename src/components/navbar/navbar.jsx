import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {
	return (
		<aside className="bg-blood h-screen flex">
			<div className="flex flex-col items-center max-w-xl mx-auto p-4 md:p-8">
				<Link to="/" className="flex items-center no-underline text-white">
					<div className="max-w-xs">
						<img
							src="https://res.cloudinary.com/andreafinlay/image/upload/v1538321354/Pith_Back_Cover.png"
							alt="pith logo"
							height="100"
							width="100"
						/>
					</div>
				</Link>
				<a
					className="mr-4 text-black hover:text-white no-underline"
					href="https://piith.bandcamp.com/"
					target="_blank"
					rel="noopener noreferrer">
					<div className="flex justify-between">
						<i className="fab fa-bandcamp icon mr-2" />
						Bandcamp
					</div>
				</a>
				{/* <div className="flex flex-col justify-between">
					<Link
						to="/"
						className="mr-6 my-2 no-underline text-white">
						Home
					</Link>

					<Link
						to="/about"
						className="mr-6 my-2 no-underline text-white">
						About
					</Link>

					<Link
						to="/contact"
						className="mr-6 my-2 no-underline text-white">
						Contact
					</Link>
				</div> */}
			</div>
		</aside>
	);
};

export default NavBar;
