import { useParams } from "react-router-dom";

import SneakerDetail from "@components/Sneakers/SneakerDetail";
import SneakerCategory from "@components/Sneakers/SneakerCategory";
import SecondLife from "@components/Sneakers/SecondLife";

import SneakerProductDetail from "@assets/Sneakers/sneaker-product-detail.png";

import Footer from "@components/Footer";
import Newsletter from "@components/Home/Newsletter";
import { Box } from "@chakra-ui/react";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import { useListShoesQuery } from "@store/api/Shoes";
import SneakerDetailSkeleton from "@components/Sneakers/SneakerDetailSkeleton";

const detail = () => {
	const { id } = useParams();
	const { data, isFetching } = useListShoesQuery({
		brand: "Jordan",
		take: "1",
		model: id,
	});

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

	return (
		<Box as="section">
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				{data !== undefined && !isFetching ? (
					<SneakerDetail
						title={data.data[0].model}
						description={data.data[0].description}
						price={data.data[0].price}
						sizes={sizes}
						rate={data.data[0].rate}
						photos={data.data[0].Photo.slice(0, 4)}
					/>
				) : (
					<SneakerDetailSkeleton />
				)}

				<SneakerCategory title="Vous aimerez aussi" nbrOfShoe={3} rate="4" />
				<SneakerCategory title="Voir plus de chaussures" nbrOfShoe={3} rate="1" />
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
