import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {
	const handleClick = function(e) {
		const el = document.getElementById('nav');

		e.preventDefault();
		el.classList.toggle('block');
		el.classList.toggle('hidden');
	};

	return (
		<nav className="bg-blood">
			<div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
				<Link to="/" className="flex items-center no-underline text-white">
					<div className="max-w-xs">
						<img src="https://res.cloudinary.com/andreafinlay/image/upload/v1538321354/Pith_Back_Cover.png"
							alt="pith logo"
							height="42"
							width="42" />
					</div>
				</Link>

				<button
					className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
					onClick={handleClick}>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>

				<div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
					<div className="text-sm">
						<Link
							to="/"
							className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white">
							Home
						</Link>

						<Link
							to="/about"
							className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
							About
						</Link>

						<Link
							to="/contact"
							className="block md:inline-block mt-4 md:mt-0 no-underline text-white">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
