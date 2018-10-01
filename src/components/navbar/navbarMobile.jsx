import React from 'react';
import Link from 'gatsby-link';

const handleClick = function(e) {
    const dropdown = document.querySelector('#dropdown');

	e.preventDefault();
	dropdown.classList.toggle('xs:flex');
	dropdown.classList.toggle('xs:hidden');
};

const NavBarMobile = () => (
    <div className="pt-1 shadow-outline">
		<div className="flex w-screen justify-between items-center">
			<div className="flex items-center">
				<Link to="/" className="mx-4">
					<img
						src="https://res.cloudinary.com/andreafinlay/image/upload/v1538321354/Pith_Back_Cover.png"
						alt="pith logo"
						height="50"
						width="50"
					/>
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

            <button
                className="block lg:hidden shadow-outline flex items-center px-3 py-2 mr-4 rounded text-gunmetal"
                onClick={handleClick}>
                <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>

		</div>

        <div id="dropdown" className="flex-col justify-between xs:hidden border-0 border-b-3 border-gunmetal bg-desire z-50 font-bold px-4 py-2 tracking-wide">
            <Link to="/releases" className="mr-6 my-2 no-underline text-gunmetal hover:text-wave ">
                Releases
				</Link>
                <hr className="border-solid border-black"/>

            <Link to="/contact" className="mr-6 my-2 no-underline text-gunmetal hover:text-wave">
                Contact
				</Link>
        </div>
	</div>
);

export default NavBarMobile;
