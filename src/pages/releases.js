import React from 'react';
import Layout from '../layouts/index.js';
import Ssm from '../components/releases/ssm/ssm.jsx';
import SsmMobile from '../components/releases/ssm/SsmMobile.jsx';
import Sotnul from '../components/releases/sotnul/Sotnul.jsx';
import SotnulMobile from '../components/releases/sotnul/SotnulMobile.jsx';

const ReleasesPage = () => (
	<Layout>
		<div className="xs:hidden md:flex lg:flex h-full bg-honeydew flex-col items-center lg:ml-24 lg:-mr-24 font-bold tracking-wide">
      <p className="h-16 text-gunmetal text-2xl xs:mt-32 md:mt-16 lg:mt-0 lg:mr-12 pin-t bg-bud shadow-outline w-screen flex items-center justify-center">
				<i class="fas fa-compact-disc mr-4" />
				Releases
			</p>
			<div className="shadow-outline rounded p-6 bg-lilac md:mt-16 lg:mt-8">
				<p className="text-gunmetal text-lg text-bold pb-6">Sweet Sweet Morning - 2016</p>
				<Ssm />
			</div>
			<div className="shadow-outline rounded p-6 bg-eton md:mt-32 lg:mt-16 mb-24">
				<p className="text-gunmetal text-lg text-bold pb-6">
					Song Of The Neverending Ugly Lizard - 2014
				</p>
				<Sotnul />
			</div>
		</div>
		<div className="xs:flex md:hidden lg:hidden w-full h-full bg-honeydew flex-col justify-center items-center font-bold tracking-wide">
			<p className="text-gunmetal text-lg mt-16 pin-t bg-bud shadow-outline w-screen h-16 flex items-center justify-center">
				<i class="fas fa-compact-disc mr-4" />
				Releases
			</p>
			<div className="shadow-outline rounded p-6 mt-6 bg-lilac">
				<p className="text-gunmetal text-lg pb-6">Sweet Sweet Morning - 2016</p>
				<SsmMobile />
			</div>
			<div className="shadow-outline rounded mt-10 mb-16 p-6 bg-lilac">
				<p className="text-gunmetal text-lg text-bold pb-6">SOTNUL - 2014</p>
				<SotnulMobile />
			</div>
		</div>
	</Layout>
);

export default ReleasesPage;
