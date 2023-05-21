import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
	height?: number | string;
	width?: number | string;
	top?: number | string;
	left?: number | string;
	right?: number | string;
	bottom?: number | string;
	initialBackground?: string;
}

const Square = (props: Props) => {
	return (
		<Box
			background="primary"
			position="absolute"
			transition="0.3s all ease"
			height="40px"
			width="40px"
			zIndex={0}
			_before={{
				content: `""`,
				height: props.height ?? "40px",
				width: props.width ?? "40px",
				position: "absolute",
				background: props.initialBackground ?? "black",
				border: "2px solid transparent",
				borderColor: "primary",
				top: 4,
				left: -4,
			}}
			{...props}
		/>
	);
};

export default Square;
