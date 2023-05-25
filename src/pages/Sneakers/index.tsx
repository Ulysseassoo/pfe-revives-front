import { Box } from "@chakra-ui/react";

import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground";
import ShoeListing from "@components/Sneakers/ShoeListing";
import SecondLife from "@components/Sneakers/SecondLife";
import SneakerCategory from "@components/Sneakers/SneakerCategory";

import SecondLifeImage from "@assets/Sneakers/second-life.png";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import Newsletter from "@components/Home/Newsletter";
import Footer from "@components/Footer";
import { useListShoesQuery } from "@store/api/Shoes";

const Sneakers = () => {
	const { data } = useListShoesQuery({
		model: "Jordan",
		take: "20",
	});

	if (!data) return <></>;

	return (
		<Box as="section">
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<Box>
					<TitleWithLogoBackground title="NOS SNEAKERS PRÉFÉRÉES" subtitle="PRODUIT" />
					<ShoeListing isFilter={true} shoes={data.data} />
				</Box>
			</Box>
			<SecondLife
				title="Donner une seconde vie à vos sneaker !"
				description="Vous voulez porter vos anciennes sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau."
				image={SecondLifeImage}
			/>
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} mt="8">
				<SneakerCategory title="Les mieux notés" nbrOfShoe={3} rate="3" />
				<SneakerCategory title="Les bons plans" nbrOfShoe={3} rate="2" />
			</Box>
			<Newsletter />
			<Footer />
		</Box>
	);
};

export default Sneakers;
