import React from "react";
import { Box, Center, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import ReviveTitleBackground from "./../../assets/About/revive-title-background.png";
import { PADDING_DESKTOP } from "@theme/theme";

type PropsType = {
	title: string;
	subtitle: string;
};

const TitleWithLogoBackground = ({ title, subtitle }: PropsType) => {
	return (
		<Grid gridTemplateColumns={"1fr 1fr "} gridTemplateRows="1fr 1fr" position="relative" marginY="4">
			<Image gridArea=" 1 / 1 / 3 / 3 " src={ReviveTitleBackground} paddingBottom={5} />
			<Center flexDir="column" gridArea=" 1 / 1 / 3 / 3 " textAlign="center">
				<Heading
					as="h2"
					color="#000000"
					textTransform={"uppercase"}
					fontSize={{ lg: "6xl", md: "4xl", base: "3xl" }}
					fontWeight="black"
					fontFamily="heading"
				>
					{title}
				</Heading>
				<Text
					color="#D4AA7D"
					textTransform="uppercase"
					fontSize={{ lg: "3xl", md: "3xm", base: "2xl" }}
					fontWeight="black"
					fontFamily="heading"
				>
					{subtitle}
				</Text>
			</Center>
		</Grid>
	);
};

export default TitleWithLogoBackground;
