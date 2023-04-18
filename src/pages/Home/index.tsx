import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../components/Home/Carousel";
import ShowShoesSection from "@components/Home/ShowShoesSection";

const Home = () => {
	return (
		<Flex gap="12vh" flexDir="column">
			<Carousel />
			<ShowShoesSection />
			<Box />
		</Flex>
	);
};

export default Home;
