import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../components/Home/Carousel";
import ShowShoesSection from "@components/Home/ShowShoesSection";
import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground";

const Home = () => {
	return (
		<Flex gap="12vh" flexDir="column">
			<Carousel />
			<ShowShoesSection />
			<TitleWithLogoBackground title="En vedette" subtitle="produit" />
		</Flex>
	);
};

export default Home;
