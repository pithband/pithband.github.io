import React from 'react';
import NavBar from './navbar.jsx';
import NavBarMobile from './navbarMobile.jsx';

const NavBarCmp = () => (
    <div>
        <div className="xs:invisible lg:visible bg-desire fixed h-screen flex shadow-outline z-50">
            <NavBar />
        </div>
        <div className="w-screen h-16 bg-desire fixed flex z-40 xs:visible lg:invisible">
            <NavBarMobile />
        </div>
    </div>
);

export default NavBarCmp;
