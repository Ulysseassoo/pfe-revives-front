import React from "react";
import { Box, Flex, Image, Text, Button, useMediaQuery } from "@chakra-ui/react";

import StarActivate from "@assets/Common/Illustration/star-activate.svg";
import StarDisable from "@assets/Common/Illustration/star-disable.svg";
import TruckSvg from "@assets/Common/Illustration/truck.svg";
import HomeSvg from "@assets/Common/Illustration/home.svg";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import { PhotoInterface } from "@inteface/PhotoInterface";
import { useAppDispatch } from "@store/hooks";
import { addItem, addProduct } from "@store/reducers/Cart";
import { ShoeInterface } from "@inteface/ShoeInterface";

type Props = {
	shoe: ShoeInterface;
};

type Sizes = {
	size: number;
	isAvailable: boolean;
};

const sizes: Sizes[] = [
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

const SneakerDetail = ({ shoe }: Props) => {
	const dispatch = useAppDispatch();
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
	return (
		<Flex flexDirection="column" marginY={10}>
			<Flex
				gap={isSmallerThan960 ? "16" : 0}
				flexDir={isSmallerThan960 ? "column" : "row"}
				justifyContent="space-between"
				marginBottom={5}
			>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column">
					<Image
						src={shoe.Photo[0].image_url}
						width="100%"
						objectFit="contain"
						background="#F6F6F6"
						marginBottom={15}
					/>
					<Flex justifyContent="space-between">
						{shoe.Photo.slice(1, 4).map((photo) => {
							return (
								<Image
									src={photo.image_url}
									key={photo.id}
									width="30%"
									height="150px"
									objectFit="contain"
									background="#F6F6F6"
								/>
							);
						})}
					</Flex>
				</Flex>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column" fontFamily="metropolis" gap={2}>
					<Text fontWeight={900} fontSize={25}>
						{shoe.model}
					</Text>

					<Flex>
						{Array(shoe.rate)
							.fill(null)
							.map((a, index) => {
								return <Image width={25} height={25} key={`star${index}`} src={StarActivate} />;
							})}
						{Array(5 - shoe.rate)
							.fill(null)
							.map((a, index) => {
								return <Image width={25} height={25} key={`star${index}`} src={StarDisable} />;
							})}
					</Flex>

					<Text fontWeight={900}>{shoe.price}€</Text>

					<Flex flexDirection="column" gap={2} marginBottom={5}>
						<Text fontWeight={900}>TAILLES</Text>
						<Flex gap={5} wrap="wrap">
							{sizes.map((size, index) => {
								return (
									<Button
										key={size.size}
										background="#F6F6F6"
										width="80px"
										height="40px"
										justifyContent="center"
										alignItems="center"
										borderRadius={5}
									>
										<Text color={size.isAvailable ? "#000" : "rgba(0,0,0,0.25)"}>{size.size}</Text>
									</Button>
								);
							})}
						</Flex>
					</Flex>

					<Flex flexDirection="column" gap={2} fontWeight={900} marginBottom={5}>
						<Flex gap={2}>
							<Image src={TruckSvg} width={6} />
							<Text>Livraison chez vous</Text>
						</Flex>
						<Flex gap={2}>
							<Image src={HomeSvg} width={6} />
							<Text>Retrait en magasin</Text>
						</Flex>
					</Flex>

					<Flex gap={5}>
						<Button
							background="#D4AA7D"
							color="white"
							borderRadius={5}
							_hover={{
								background: "primaryHover",
							}}
							onClick={() => {
								dispatch(addItem(shoe));
								dispatch(addProduct(shoe));
							}}
						>
							Ajouter au panier
						</Button>
						<Button
							borderColor="gray.200"
							_hover={{
								borderColor: "primary",
								background: "white",
							}}
							borderWidth={1}
							color="#D4AA7D"
							background="white"
							borderRadius={5}
						>
							Ajouter aux favoris
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDirection="column">
				<Text color="#D4AA7D" fontFamily="metropolis" fontWeight={900} fontSize={20}>
					Description
				</Text>
				<Text>{shoe.description}</Text>
			</Flex>
		</Flex>
	);
};

export default SneakerDetail;
