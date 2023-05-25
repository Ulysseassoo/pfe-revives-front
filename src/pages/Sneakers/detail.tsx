import React from "react";
import { useParams } from "react-router-dom";

import SneakerDetail from "@components/Sneakers/SneakerDetail";
import SneakerCategory from "@components/Sneakers/SneakerCategory";
import SecondLife from "@components/Sneakers/SecondLife";
import SneakerFooter from "@components/Sneakers/SneakerFooter";

import SneakerProductDetail from "@assets/Sneakers/sneaker-product-detail.png";

import SneakerDetail1 from "@assets/Sneakers/sneaker-detail-1.png";
import SneakerDetail2 from "@assets/Sneakers/sneaker-detail-2.png";
import SneakerDetail3 from "@assets/Sneakers/sneaker-detail-3.png";
import SneakerDetail4 from "@assets/Sneakers/sneaker-detail-4.png";
import Footer from "@components/Footer";
import Newsletter from "@components/Home/Newsletter";
import { Box } from "@chakra-ui/react";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";

const detail = () => {
	const { id } = useParams();

	const sizes = [
		{
			size: 40,
			isAvailable: true,
		},
		{
			size: 40.5,
			isAvailable: false,
		},
		{
			size: 41,
			isAvailable: true,
		},
		{
			size: 42,
			isAvailable: true,
		},
		{
			size: 42.5,
			isAvailable: false,
		},
		{
			size: 43,
			isAvailable: true,
		},
		{
			size: 44,
			isAvailable: false,
		},
		{
			size: 44.5,
			isAvailable: true,
		},
		{
			size: 45,
			isAvailable: true,
		},
	];

	const photos = [SneakerDetail1, SneakerDetail2, SneakerDetail3, SneakerDetail4];

	return (
		<Box as="section">
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<SneakerDetail
					title="Adidas ozweego white and black"
					description="Inspirée des chaussures de running vintage, ce modèle junior twiste le style des nineties. La tige en textile et cuir à chausson intégré épouse parfaitement la forme du pied pour plus de souplesse. Elle est dotée d'une semelle intermédiaire en EVA légère pour plus de confort et une bonne absorption des chocs."
					price={100}
					sizes={sizes}
					rate={4}
					photos={photos}
				/>

				<SneakerCategory title="Vous aimerez aussi" nbrOfShoe={3} />
				<SneakerCategory title="Voir plus de chaussures" nbrOfShoe={3} />
			</Box>

			<SecondLife
				title="Donnez une seconde vie à vos sneakers"
				description="Vous voulez porter vos anciennes sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau."
				image={SneakerProductDetail}
			/>

			<Box w="full">
				<Newsletter />
			</Box>
			<Footer />
		</Box>
	);
};

export default detail;
