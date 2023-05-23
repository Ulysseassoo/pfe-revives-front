import { chakra, extendTheme, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const GlobalTheme = extendTheme({
	colors: {
		primary: "#D4AA7D",
		primaryHover: "#C09E79",
	},
	fonts: {
		body: `'Open Sans Variable', sans-serif`,
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

export const ChakraBox = chakra(motion.div, {
	/**
	 * Allow motion props and non-Chakra props to be forwarded.
	 */
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const PADDING_DESKTOP = "6rem";
export const PADDING_IPAD = "2rem";

export default GlobalTheme;
