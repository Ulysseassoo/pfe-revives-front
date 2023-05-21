import { Box, Center, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../components/Home/Carousel";
import ShowShoesSection from "@components/Home/ShowShoesSection";
import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground";
import Catalog from "@components/Home/Catalog";
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme";
import CleaningSection from "@components/Home/CleaningSection";
import MostSoldShoes from "@components/Home/MostSoldShoes";
import Newsletter from "@components/Home/Newsletter";

const Home = () => {
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)");
	return (
		<Flex gap="12vh" flexDir="column">
			<Carousel />
			<Center as="section" paddingX={isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP}>
				<Center flexDir="column" gap="4" maxW={isSmallerThan890 ? "90%" : "80%"}>
					<Heading
						textTransform={"uppercase"}
						color="primary"
						as="h2"
						fontWeight="extrabold"
						textAlign="center"
						fontSize="4xl"
					>
						Modèles les plus populaires
					</Heading>
					<Text textAlign={"center"} fontSize="lg" lineHeight={"1.75rem"} fontWeight="300">
						Découvrez notre sélection exclusive de chaussures remises à neuf et prêtes à être portées. Ces modèles
						populaires ont été soigneusement nettoyés et restaurés, offrant une seconde vie à des chaussures de qualité.
						Explorez notre collection de sneakers tendance et redécouvrez le style avec des chaussures qui ont retrouvé
						tout leur éclat.
					</Text>
				</Center>
			</Center>
			<Catalog />
			<CleaningSection />
			<MostSoldShoes />
			<Newsletter />
		</Flex>
	);
};

export default Home;
