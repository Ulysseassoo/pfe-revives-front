import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground";
import ShoeListing from "@components/Sneakers/ShoeListing";
import SecondLife from "@components/Sneakers/SecondLife";
import SneakerCategory from "@components/Sneakers/SneakerCategory";
import SneakerFooter from "@components/Sneakers/SneakerFooter";

import { dummyShoes } from "@dummyDatas/Shoes";

import SecondLifeImage from "@assets/Sneakers/second-life.png";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import Newsletter from "@components/Home/Newsletter";
import Footer from "@components/Footer";

const Sneakers = () => {
	return (
		<Box as="section">
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<Box>
					<TitleWithLogoBackground title="NOS SNEAKERS PRÉFÉRÉES" subtitle="PRODUIT" />
					<ShoeListing isFilter={true} shoes={dummyShoes} />
				</Box>
			</Box>
			<SecondLife
				title="Donner une seconde vie à vos sneaker !"
				description="Vous voulez porter vos anciennes sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau."
				image={SecondLifeImage}
			/>
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} mt="8">
				<SneakerCategory title="Les mieux notés" nbrOfShoe={3} />
				<SneakerCategory title="Les bons plans" nbrOfShoe={3} />
			</Box>
			<Newsletter />
			<Footer />
		</Box>
	);
};

export default Sneakers;
