import React from 'react';
import Link from 'gatsby-link';

const handleClick = function(e) {
    const dropdown = document.querySelector('#dropdown');
    const burgerWrapper = document.querySelector('#burger-wrapper');
    const burger = document.querySelector('#burger');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

	e.preventDefault();
	dropdown.classList.toggle('xs:flex');
    dropdown.classList.toggle('xs:hidden');
    burgerWrapper.classList.toggle('open');
    burger.classList.toggle('border-bud');
    line1.classList.toggle('bg-bud');
    line2.classList.toggle('bg-bud');
    line3.classList.toggle('bg-bud');
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
                id="burger"
                className="block focus:outline-none lg:hidden border-3 flex items-center px-2 py-1 mr-4 rounded border-gunmetal"
                onClick={handleClick}>
                <div id="burger-wrapper" className="h-6 flex flex-col justify-between">
                    <div id="line1" className="line half start w-3 h-1 bg-gunmetal rounded" />
                    <div id="line2" className="line w-6 h-1 bg-gunmetal rounded" />
                    <div id="line3" className="line half end self-end w-3 h-1 bg-gunmetal rounded" />
                </div>
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
