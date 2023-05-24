import React from "react";
import { Box, Flex, Image, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme";

type Props = {
	title: string;
	description: string;
	image: string;
};

const SecondLife = ({ title, description, image }: Props) => {
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
	return (
		<Flex flexDirection="column" alignItems="center" background="#1C1C1C" paddingY={10} paddingBottom="100px">
			<Text
				color="#D4AA7D"
				fontSize={isSmallerThan960 ? 20 : 25}
				paddingX={isSmallerThan960 ? PADDING_IPAD : PADDING_DESKTOP}
				textAlign="center"
				marginBottom={10}
			>
				{title}
			</Text>
			<Flex
				flexDir={isSmallerThan960 ? "column" : "row"}
				justifyContent={isSmallerThan960 ? "center" : "initial"}
				alignItems={isSmallerThan960 ? "center" : "initial"}
				gap={isSmallerThan960 ? "28" : "0"}
			>
				<Flex width={isSmallerThan960 ? "100%" : "50% "} justifyContent={isSmallerThan960 ? "center" : "flex-end"}>
					<Box width={isSmallerThan960 ? "80%" : "60%"} marginRight={isSmallerThan960 ? 0 : 20} position="relative">
						<Image src={image} position="relative" zIndex={2} />
						<Box width="100%" height="100%" position="absolute" left={-5} top={5} zIndex={1} background="#D4AA7D" />
					</Box>
				</Flex>
				<Flex
					width={isSmallerThan960 ? "100%" : "50% "}
					flexDirection="column"
					justifyContent="center"
					alignItems={isSmallerThan960 ? "center" : "flex-start"}
					gap={10}
				>
					<Text width="70%" color="white">
						{description}
					</Text>
					<Button background="#D4AA7D" color="white" paddingX={25}>
						En savoir plus
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SecondLife;
