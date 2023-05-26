import React from "react";
import { Box, Flex, Grid, Image, Skeleton, Text } from "@chakra-ui/react";

import { ShoeInterface } from "@inteface/ShoeInterface";

import FilterLogo from "@assets/Common/Illustration/filter-logo.svg";
import ArrowDown from "@assets/arrow-down.svg";

import ShoeBox from "@components/Common/ShoeBox";
import ShoeLinkBox from "@components/Common/ShoeLinkBox";

type PropsType = {
	isFilter: boolean;
	shoes: ShoeInterface[] | undefined;
};

const ShoeListing = ({ isFilter, shoes }: PropsType) => {
	const emptyArray = Array.from({ length: 9 });

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
				{shoes !== undefined
					? shoes.map((shoe, index) => {
							return (
								<Box w="full" key={`${shoe.shoe_id}`}>
									<ShoeLinkBox {...shoe} />
								</Box>
							);
					  })
					: emptyArray.map((_, index) => (
							<Skeleton background="#F8F8F8" w="full" key={`skeletong${index}`} height="300px" />
					  ))}
			</Grid>
		</>
	);
};

export default ShoeListing;
