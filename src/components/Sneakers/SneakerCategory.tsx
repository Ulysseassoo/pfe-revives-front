import React from "react";
import { Box, Flex, Image, Text, Input } from "@chakra-ui/react";

import ShoeListing from "./ShoeListing";

import { dummyShoes } from "@dummyDatas/Shoes";
import { useListShoesQuery } from "@store/api/Shoes";

type Props = {
	title: string;
	nbrOfShoe: number;
	rate: string;
};

const SneakerCategory = ({ title, nbrOfShoe, rate }: Props) => {
	const { data } = useListShoesQuery({
		brand: "Jordan",
		take: nbrOfShoe.toString(),
		rate,
	});

	if (!data) return <></>;

	return (
		<Flex flexDirection="column">
			<Box marginBottom={5}>
				<Text fontSize={20} fontWeight={900} fontFamily="metropolis">
					{title}
				</Text>
			</Box>

			<ShoeListing isFilter={false} shoes={data.data} />
		</Flex>
	);
};

export default SneakerCategory;
