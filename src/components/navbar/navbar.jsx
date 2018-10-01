import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => (
	<div>
		<div className="xs:invisible lg:visible bg-desire fixed h-screen flex shadow-outline z-50">
			<div className="flex flex-col items-center p-8 border-gunmetal">
				<Link to="/">
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
						<a
							className="ml-2 mt-1 text-gunmetal hover:text-wave no-underline"
							href="https://piith.bandcamp.com/"
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex justify-between">
								<i className="fab fa-bandcamp icon mr-2" />
								Bandcamp
							</div>
						</a>
						<a
							className="ml-2 text-gunmetal hover:text-wave no-underline"
							href="https://www.instagram.com/pith.band/"
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex justify-between">
								<i class="fab fa-instagram mr-2" />
								Instagram
							</div>
						</a>
						<a
							className="ml-2 text-gunmetal hover:text-wave no-underline"
							href="https://www.facebook.com/pith.band/"
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex justify-between">
								<i class="fab fa-facebook-square mr-2" />
								Facebook
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="w-screen h-16 bg-desire fixed flex shadow-outline z-50 xs:visible lg:invisible">
			<div className="flex w-full justify-between items-center">
				<div className="flex items-center">
					<Link to="/">
						<div className="mr-6">
							<img
								src="https://res.cloudinary.com/andreafinlay/image/upload/v1538321354/Pith_Back_Cover.png"
								alt="pith logo"
								height="50"
								width="50"
							/>
						</div>
					</Link>
					<a
						className="ml-2 my-1 text-gunmetal hover:text-wave no-underline"
						href="https://piith.bandcamp.com/"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-bandcamp icon mr-4" />
					</a>
					<a
						className="ml-2 my-1 text-gunmetal hover:text-wave no-underline"
						href="https://www.instagram.com/pith.band/"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-instagram mr-4" />
					</a>
					<a
						className="ml-2 my-1 text-gunmetal hover:text-wave no-underline"
						href="https://www.facebook.com/pith.band/"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fab fa-facebook-square mr-2" />
					</a>
				</div>
				<div className="flex items-center justify-between">
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
				</div>
			</div>
		</div>
	</div>
);

export default NavBar;
