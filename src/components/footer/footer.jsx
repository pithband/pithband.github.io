import React from "react";

const Footer = () => (
    <div className="shadow-outline h-8 w-screen pin-b fixed bg-wave">
        <div className="flex justify-end items-center pt-1 px-5 text-xs">
            <div className="w-48 flex pt-px items-center justify-end">
                <div className="text-gunmetal">Made with</div>
                <div className="w-3 h-3 mx-2">
                    <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://res.cloudinary.com/andreafinlay/image/upload/v1530836093/gatsby-logo.svg"
                            alt="gatsby logo"
                        />
                    </a>
                </div>
                <div className="text-gunmetal">&amp;</div>
                <div className="w-5 h-5 ml-1">
                    <a
                        href="https://www.tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="https://res.cloudinary.com/andreafinlay/image/upload/v1538357333/tailwind-logo.png"
                            alt="tailwind logo"
                        />
                    </a>
                </div>
            </div>
            <p className="text-desire font-bold ml-3">Pith 2018</p>
        </div>
    </div>
);

export default Footer;
