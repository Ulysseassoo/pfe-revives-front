import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import StarActivate from "@assets/Common/Illustration/star-activate.svg";
import StarDisable from "@assets/Common/Illustration/star-disable.svg";

type PropsType = {
	name: string;
	price: number;
	realPrice: number;
	rate: number;
	image: string;
};

const ShoeBox = ({ name, price, realPrice, rate, image }: PropsType) => {
	const discount = Math.round(((realPrice - price) / realPrice) * 100);

	return (
		<Flex flexDirection="column" alignItems="center" gap={1}>
			<Flex
				background="#F8F8F8"
				height={"calc(200px + 5vw)"}
				justifyContent="center"
				width={{ lg: "calc(200px + 5vw)", md: "calc(250px + 10vw)", base: "full" }}
				marginBottom={15}
			>
				<Image src={image} objectFit="contain" width="80%" />
			</Flex>
			<Text fontSize={20} fontWeight={800}>
				{name}
			</Text>
			<Flex>
				{Array(rate)
					.fill(null)
					.map((a, index) => {
						return <Image width={25} height={25} key={index} src={StarActivate} />;
					})}
				{Array(5 - rate)
					.fill(null)
					.map((a, index) => {
						return <Image width={25} height={25} key={index} src={StarDisable} />;
					})}
			</Flex>
			<Text fontWeight={800}>
				À partir de <span style={{ color: "#D4AA7D" }}>{price} €</span>
			</Text>
			<Text>
				Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{realPrice} €</span> (-{discount}%)
			</Text>
		</Flex>
	);
};

export default ShoeBox;
