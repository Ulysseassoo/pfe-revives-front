import { Box, Center, Circle, Flex, Image } from "@chakra-ui/react";
import React from "react";
import BackgroundImage from "../../../assets/Home/Slide.png";

const Carousel = () => {
	return (
		<Flex position="relative">
			<Box>
				<Image w='100%' src={BackgroundImage} objectFit='contain' />
			</Box>
			<Box bottom="0" position="absolute" w="full" p="2">
				<Center gap="10px">
					<Circle bg="primary" cursor="pointer" size='22.5px' />
					<Circle bg="#434343" cursor="pointer" size='22.5px' />
					<Circle bg="#434343" cursor="pointer" size='22.5px' />
				</Center>
			</Box>
		</Flex>
	);
};

export default Carousel;
