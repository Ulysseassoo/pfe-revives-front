import { Box, Center, Flex, Grid, Image, Text, useMediaQuery } from "@chakra-ui/react";
import ShoeBox from "@components/Common/ShoeBox";
import ShoeListing from "@components/Sneakers/ShoeListing";
import { dummyShoes } from "@dummyDatas/Shoes";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import StarActivate from "@assets/Common/Illustration/star-activate.svg";
import StarDisable from "@assets/Common/Illustration/star-disable.svg";

const Catalog = () => {
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)");
	const shoesToDisplay = dummyShoes.slice(0, 8);
	const discount = Math.round(((dummyShoes[0].realPrice - dummyShoes[0].price) / dummyShoes[0].realPrice) * 100);
	return (
		<Grid
			gap={"2rem"}
			gridTemplateColumns={{
				xl: "repeat(4,minmax(0,1fr))",
				lg: "repeat(3,minmax(0,1fr))",
				md: "repeat(2,minmax(0,1fr))",
				sm: "repeat(1,minmax(0,1fr))",
			}}
			paddingX={isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP}
		>
			{shoesToDisplay.map((shoe, index) => (
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
						<Text fontSize={20} fontWeight={800}>
							{shoe.name}
						</Text>
						<Flex>
							{Array(shoe.rate)
								.fill(null)
								.map((a, index) => {
									return <Image width={25} height={25} key={index} src={StarActivate} />;
								})}
							{Array(5 - shoe.rate)
								.fill(null)
								.map((a, index) => {
									return <Image width={25} height={25} key={index} src={StarDisable} />;
								})}
						</Flex>
						<Text fontWeight={800}>
							À partir de <span style={{ color: "#D4AA7D" }}>{shoe.price} €</span>
						</Text>
						<Text>
							Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{shoe.realPrice} €</span> (-
							{discount}%)
						</Text>
					</Center>
				</ChakraLink>
			))}
		</Grid>
	);
};

export default Catalog;
