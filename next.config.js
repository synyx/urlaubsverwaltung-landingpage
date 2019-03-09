const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withImages = require("next-images");

const config = {
	env: {
		CONTENT_HOST: "http://localhost:3000",
		BASE_PATH: process.env.BASE_PATH || "",
	},
	purgeCss: {
		extractors: [
			{
				extractor: class TailwindExtractor {
					static extract(content) {
						return content.match(/[A-Za-z0-9:/_-]+/g) || [];
					}
				},
				extensions: ["tailwind.css", "js", "jsx", "svg"].concat([
					// TODO remove extensions as soon as DefaultExtractor fallback exists in purgecss.
					//      see https://github.com/FullHuman/purgecss/issues/148
					"jpg",
					"jpeg",
					"png",
					"gif",
				]),
			},
		],
	},
	assetPrefix: process.env.ASSET_PREFIX || "",
};

function compose(...fns) {
	return config => fns.reduceRight((config, fn) => fn(config), config);
}

module.exports = compose(
	withCSS,
	withPurgeCss,
	withImages,
)(config);
