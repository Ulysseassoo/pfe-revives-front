import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PADDING_DESKTOP } from "@theme";
import Puma from "@assets/Home/Puma.png";
import SeeMore from "@assets/Home/more.svg";

const ShowShoesSection = () => {
	return (
		<Flex px={PADDING_DESKTOP} alignItems={"center"} justifyContent={"space-between"}>
			<Center flexDir="column" height="270px" width="300px" border="1px solid black" p="8" boxShadow="black -10px 10px">
				<Text fontFamily={"heading"} fontWeight="extrabold" fontSize="1.75rem" position="relative" top="4">
					Puma MB
				</Text>
				<Box height="full" width="full">
					<Image
						src={"https://images.footlocker.com/is/image/FLEU/314205387104_01?wid=2000&hei=2000&fmt=png-alpha"}
						alt="shoe puma"
						objectFit="contain"
					/>
				</Box>
			</Center>

			<Center flexDir="column" height="270px" width="300px" border="1px solid black" p="8" boxShadow="black -10px 10px">
				<Text fontFamily={"heading"} fontWeight="extrabold" fontSize="1.75rem" position="relative" top="4">
					Puma MB
				</Text>
				<Box height="full" width="full">
					<Image
						src={"https://images.footlocker.com/is/image/FLEU/314205387104_01?wid=2000&hei=2000&fmt=png-alpha"}
						alt="shoe puma"
						objectFit="contain"
					/>
				</Box>
			</Center>

			<Center flexDir="column" height="270px" width="300px" border="1px solid black" p="8" boxShadow="black -10px 10px">
				<Text fontFamily={"heading"} fontWeight="extrabold" fontSize="1.75rem" position="relative" top="4">
					Puma MB
				</Text>
				<Box height="full" width="full">
					<Image
						src={"https://images.footlocker.com/is/image/FLEU/314205387104_01?wid=2000&hei=2000&fmt=png-alpha"}
						alt="shoe puma"
						objectFit="contain"
					/>
				</Box>
			</Center>

			<Center flexDir="column" height="270px" width="300px" border="1px solid black" p="8" boxShadow="black -10px 10px">
				<Text fontFamily={"heading"} fontWeight="extrabold" fontSize="1.75rem" position="relative" top="4">
					Puma MB
				</Text>
				<Box height="full" width="full">
					<Image
						src={"https://images.footlocker.com/is/image/FLEU/314205387104_01?wid=2000&hei=2000&fmt=png-alpha"}
						alt="shoe puma"
						objectFit="contain"
					/>
				</Box>
			</Center>

			<Grid
				placeItems="center"
				height="270px"
				width="300px"
				border="1px solid black"
				boxShadow="rgba(0,0,0, 0.8) -10px 10px"
				background={"black"}
			>
				<Box height="full" width="full" gridArea={"1 / 1 / 2 / 2"} display="grid" placeItems={"center"}>
					<Image src={SeeMore} alt="see more..." objectFit={"contain"} />
				</Box>

				<Text
					textTransform={"uppercase"}
					fontFamily={"heading"}
					fontWeight="extrabold"
					fontSize="1.75rem"
					position="relative"
					top="4"
					color="white"
					gridArea={"1 / 1 / 2 / 2"}
				>
					Voir plus
				</Text>
			</Grid>
		</Flex>
	);
};

export default ShowShoesSection;
