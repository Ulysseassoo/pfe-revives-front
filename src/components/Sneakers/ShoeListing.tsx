import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import { ShoeInterface } from "@inteface/ShoeInterface";

import FilterLogo from "@assets/Common/Illustration/filter-logo.svg";
import ArrowDown from "@assets/arrow-down.svg";

import ShoeBox from "@components/Common/ShoeBox";
import ShoeLinkBox from "@components/Common/ShoeLinkBox";

type PropsType = {
	isFilter: boolean;
	shoes: ShoeInterface[];
};

const ShoeListing = ({ isFilter, shoes }: PropsType) => {
	return (
		<>
			{isFilter && (
				<Flex w="100%" justifyContent="flex-end" gap={10} marginBottom={10}>
					<Flex gap={1} alignItems="center">
						<Text>Filter</Text>
						<Image src={FilterLogo} h="70%" />
					</Flex>
					<Flex gap={1} alignItems="center">
						<Text>Trier</Text>
						<Image src={ArrowDown} />
					</Flex>
				</Flex>
			)}

			<Grid
				gap={"2rem"}
				gridTemplateColumns={{
					lg: "repeat(3,minmax(0,1fr))",
					md: "repeat(2,minmax(0,1fr))",
					sm: "repeat(1,minmax(0,1fr))",
				}}
				mb="10"
			>
				{shoes.map((shoe, index) => {
					return (
						<Box w="full" key={`${shoe.shoe_id}`}>
							<ShoeLinkBox {...shoe} />
						</Box>
					);
				})}
			</Grid>
		</>
	);
};

export default ShoeListing;
