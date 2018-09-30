import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {
	return (
		<div className="bg-desire h-screen flex shadow-outline z-50">
			<div className="flex flex-col items-center max-w-xl mx-auto p-4 md:p-8 border-gunmetal">
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
				<div className="flex flex-col justify-between">
					<Link
						to="/releases"
						className="mr-6 my-2 no-underline text-gunmetal hover:text-wave">
						Releases
					</Link>

					<Link
						to="/contact"
						className="mr-6 my-2 no-underline text-gunmetal hover:text-wave">
						Contact
					</Link>
					<div className="my-6">
						<p className="text-gunmetal">Links</p>
						<div className="ml-2">
						<a
							className="ml-2 my-1 text-gunmetal hover:text-wave no-underline"
							href="https://piith.bandcamp.com/"
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex justify-between">
								<i className="fab fa-bandcamp icon mr-2" />
								Bandcamp
							</div>
						</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
