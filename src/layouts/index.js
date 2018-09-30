import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './index.css';

const Layout = ({ children }) => (
	<div className="flex font-sans justify-between">
		<Helmet
			title="Pith"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			]}>
			<link
				href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
				rel="stylesheet"
				integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
				crossorigin="anonymous"
			/>
			<link href="https://fonts.googleapis.com/css?family=Karla|NTR|K2D" rel="stylesheet" />
		</Helmet>
		<NavBar />
		<div className="flex flex-col flex-1 md:justify-center w-full">
			{children}
		</div>
		<Footer />
	</div>
);

Layout.propTypes = {
	children : PropTypes.object
};

export default Layout;
