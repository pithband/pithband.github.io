module.exports = {
	pathPrefix   : `/pithband.github.io`,
	siteMetadata : {
		title : 'Gatsby Starter Tailwind'
	},
	plugins      : [
		'gatsby-plugin-react-helmet',
		{
			resolve : `gatsby-plugin-favicon`,
			options : {
				logo       : './src/content/favicon.png',
				injectHTML : true,
				icons      : {
					android      : true,
					appleIcon    : true,
					appleStartup : true,
					coast        : false,
					favicons     : true,
					firefox      : true,
					twitter      : false,
					yandex       : false,
					windows      : false
				}
			}
		}
	]
};
