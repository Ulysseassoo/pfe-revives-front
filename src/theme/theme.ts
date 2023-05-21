import { extendTheme } from "@chakra-ui/react";

const GlobalTheme = extendTheme({
	colors: {
		primary: "#D4AA7D",
		primaryHover: "#C09E79",
	},
	fonts: {
		body: `'Open Sans', sans-serif`,
		heading: `'Metropolis', sans-serif`,
	},
	styles: {
		global: () => ({
			"*": {
				margin: 0,
			},
			"html, body": {
				height: "100%",
			},
			body: {
				lineHeight: 1.5,
				WebkitFontSmoothing: "antialiased",
			},
			"*, *::before, *::after": {
				boxSizing: "border-box",
			},
			"img, picture, video, canvas, svg": {
				display: "block",
				maxWidth: "100%",
			},
			" input, button, textarea, select": {
				font: "inherit",
			},
			"p, h1, h2, h3, h4, h5, h6": {
				overflowWrap: "break-word",
			},
			"#root, #__next": {
				isolation: "isolate",
			},
		}),
	},
});

export const PADDING_DESKTOP = "6rem";
export const PADDING_IPAD = "3rem";

export default GlobalTheme;
