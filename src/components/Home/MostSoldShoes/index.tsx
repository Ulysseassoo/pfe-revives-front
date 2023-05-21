import { Flex, Center, Heading, useMediaQuery, Text, Box, Image, Grid } from "@chakra-ui/react";
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { dummyShoes } from "@dummyDatas/Shoes";
import StarActivate from "@assets/Common/Illustration/star-activate.svg";
import StarDisable from "@assets/Common/Illustration/star-disable.svg";
import Catalog from "../Catalog";

const MostSoldShoes = () => {
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)");
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");

	return (
		<Flex
			as="section"
			paddingY="1rem"
			paddingX={isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP}
			flexDir="column"
			gap="3rem"
		>
			<Center>
				<Center flexDir="column" gap="4" maxW={isSmallerThan890 ? "90%" : "80%"}>
					<Heading
						textTransform={"uppercase"}
						color="primary"
						as="h2"
						fontWeight="extrabold"
						textAlign="center"
						fontSize="4xl"
					>
						Modèles les plus vendus
					</Heading>
					<Text textAlign={"center"} fontSize="lg" lineHeight={"1.75rem"} fontWeight="300">
						Le top des ventes de chaussures : Des modèles qui captivent l'attention de tous les passionnés de sneakers.
					</Text>
				</Center>
			</Center>
			<Flex w="full" height="80vh" gap="8" flexDirection={isSmallerThan980 ? "column" : "row"}>
				<Box flex="1">
					<ChakraLink
						as={Link}
						to="/shoe/jordan-1"
						transitionDuration={"0.2s"}
						display="flex"
						flexDirection="column"
						gap="1"
						height="full"
						width="full"
						textDecoration={"none"}
						overflow="hidden"
						cursor={"pointer"}
						_hover={{
							transform: "scale(1.05)",
							opacity: 0.9,
						}}
						key={`${dummyShoes[0].name}`}
						pb="5"
					>
						<Center height={isSmallerThan980 ? "400px" : "full"} background="#F8F8F8">
							<Center p="1rem">
								<Image src={dummyShoes[0].image} height="auto" color="transparent" loading="lazy" decoding="async" />
							</Center>
						</Center>
						<Center flexDir="column" gap="0.5rem" padding="1rem">
							<Text fontSize={20} fontWeight={800}>
								{dummyShoes[0].name}
							</Text>
							<Flex>
								{Array(dummyShoes[0].rate)
									.fill(null)
									.map((a, index) => {
										return <Image width={25} height={25} key={index} src={StarActivate} />;
									})}
								{Array(5 - dummyShoes[0].rate)
									.fill(null)
									.map((a, index) => {
										return <Image width={25} height={25} key={index} src={StarDisable} />;
									})}
							</Flex>
							<Text fontWeight={800}>
								À partir de <span style={{ color: "#D4AA7D" }}>{dummyShoes[0].price} €</span>
							</Text>
							<Text>
								Prix neuf:{" "}
								<span style={{ textDecoration: "line-through", fontWeight: 900 }}>{dummyShoes[0].realPrice} €</span> (-
								{45}%)
							</Text>
						</Center>
					</ChakraLink>
				</Box>
				<Grid
					flex="1"
					gap={"2rem"}
					gridTemplateColumns={{
						md: "repeat(2,minmax(0,1fr))",
						sm: "repeat(1,minmax(0,1fr))",
					}}
				>
					{dummyShoes.slice(0, 4).map((shoe, index) => (
						<ChakraLink
							as={Link}
							to="/shoe/jordan-1"
							transitionDuration={"0.2s"}
							display="flex"
							flexDirection="column"
							gap="1"
							textDecoration={"none"}
							overflow="hidden"
							cursor={"pointer"}
							_hover={{
								transform: "scale(1.05)",
								opacity: 0.9,
							}}
							key={`${shoe.name}${index}`}
							pb="5"
						>
							<Center height="300px" background="#F8F8F8">
								<Center p="1rem">
									<Image src={shoe.image} height="auto" color="transparent" loading="lazy" decoding="async" />
								</Center>
							</Center>
							<Center flexDir="column" gap="0.5rem" padding="1rem">
								<Text fontSize={"sm"} fontWeight={800}>
									{shoe.name}
								</Text>
								<Flex>
									{Array(shoe.rate)
										.fill(null)
										.map((a, index) => {
											return <Image width={15} height={15} key={index} src={StarActivate} />;
										})}
									{Array(5 - shoe.rate)
										.fill(null)
										.map((a, index) => {
											return <Image width={15} height={15} key={index} src={StarDisable} />;
										})}
								</Flex>
								<Text fontSize="sm" fontWeight={800}>
									À partir de <span style={{ color: "#D4AA7D" }}>{shoe.price} €</span>
								</Text>
								<Text fontSize="sm">
									Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{shoe.realPrice} €</span>{" "}
									(-
									{20}%)
								</Text>
							</Center>
						</ChakraLink>
					))}
				</Grid>
			</Flex>
		</Flex>
	);
};

export default MostSoldShoes;
