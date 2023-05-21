import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import ReviveTitleBackground from "./../../assets/About/revive-title-background.png";
import { PADDING_DESKTOP } from "@theme/theme";

type PropsType = {
	title: string;
	subtitle: string;
};

const TitleWithLogoBackground = ({ title, subtitle }: PropsType) => {
	return (
		<Flex position='relative' marginY={25} paddingX={PADDING_DESKTOP}>
			<Image src={ReviveTitleBackground} paddingY={5} />
			<Box position='absolute' left="50%" top="65%" transform="translate(-50%, -50%)" textAlign='center'>
				<Text color='#000000' textTransform={"uppercase"} fontSize={"7xl"} fontWeight="black" fontFamily="heading">
					{title}
				</Text>
				<Text color='#D4AA7D' textTransform="uppercase" fontSize={"4xl"} fontWeight='black' fontFamily="heading">
					{subtitle}
				</Text>
			</Box>
		</Flex>
	);
};

export default TitleWithLogoBackground;
