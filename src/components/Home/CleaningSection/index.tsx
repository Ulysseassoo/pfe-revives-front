import { Box, Button, Center, Flex, HStack, Heading, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React, { useRef } from "react";
import ShoeCleaning from "@assets/Home/shoe-cleaning.png";
import Point from "@assets/Home/point.svg";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import Square from "@components/Square";
import Circle from "@components/Circle";

const CleaningSection = () => {
	const ref = useRef(null);
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");

	return (
		<Center
			ref={ref}
			maxW="100%"
			paddingX={isSmallerThan980 ? PADDING_IPAD : PADDING_DESKTOP}
			height={isSmallerThan980 ? "auto" : "600px"}
			background="black"
			flexDir="column"
			gap="4rem"
			paddingY={isSmallerThan980 ? "2rem" : "0.5rem"}
			position="relative"
		>
			<Square
				width={isSmallerThan980 ? "40px" : "50px"}
				height={isSmallerThan980 ? "40px" : "50px"}
				top={isSmallerThan980 ? "400px" : 10}
				left={8}
				containerRef={ref}
			/>
			<Circle
				width={isSmallerThan980 ? "40px" : "50px"}
				height={isSmallerThan980 ? "40px" : "50px"}
				top={isSmallerThan980 ? 40 : 60}
				right={14}
				containerRef={ref}
			/>
			<Heading
				as="h3"
				fontWeight={"extrabold"}
				textAlign={isSmallerThan980 ? "center" : "initial"}
				fontSize={isSmallerThan980 ? "3xl" : "4xl"}
				textTransform={"uppercase"}
				color="primary"
				zIndex="4"
				position="relative"
			>
				Le nettoyage de sneakers evolue !
			</Heading>
			<Flex zIndex="4" position="relative" gap="6rem" alignItems="center" flexDir={isSmallerThan980 ? "column" : "row"}>
				<Box flex="1">
					<Image objectFit={"contain"} height="100%" w="100%" src={ShoeCleaning} alt="Shoe cleaning" />
				</Box>
				<Center flex="1">
					<VStack alignItems="baseline" spacing="6" color="white">
						<Heading fontSize={isSmallerThan980 ? "xl" : "3xl"} as="h4" fontWeight={"bold"}>
							Simple, clair et efficace !
						</Heading>
						<HStack spacing="8" alignItems="center">
							<Image src={Point} alt="Point" />
							<Text fontSize={isSmallerThan980 ? "md" : "lg"} maxW="60%">
								Découvrez notre nouvelle formule pour le nettoyage de vos chaussures.{" "}
							</Text>
						</HStack>
						<HStack spacing="8" alignItems="center">
							<Image src={Point} alt="Point" />
							<Text fontSize={isSmallerThan980 ? "md" : "lg"} maxW="60%">
								Toujours plus adaptée aux matières les plus délicates.{" "}
							</Text>
						</HStack>
						<HStack spacing="8" alignItems="center">
							<Image src={Point} alt="Point" />
							<Text fontSize={isSmallerThan980 ? "md" : "lg"} maxW="60%">
								Redonnez toujours plus d&apos;éclat à vos chaussures.{" "}
							</Text>
						</HStack>

						<Center alignSelf={"center"} w="40%">
							<Button
								mt="2"
								p="2"
								w="full"
								background="primary"
								color="white"
								_hover={{
									background: "primaryHover",
								}}
								type="button"
								borderRadius={"none"}
							>
								C'est parti
							</Button>
						</Center>
					</VStack>
				</Center>
			</Flex>
		</Center>
	);
};

export default CleaningSection;
