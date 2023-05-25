import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import StarActivate from "@assets/Common/Illustration/star-activate.svg";
import StarDisable from "@assets/Common/Illustration/star-disable.svg";
import { Center, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
	image: string;
	name: string;
	price: number;
	realPrice: number;
	rate: number;
	images: string[];
}

const ShoeLinkBox = ({ realPrice, price, image, name, rate }: Props) => {
	const discount = Math.round(((realPrice - price) / realPrice) * 100);

	return (
		<ChakraLink
			as={Link}
			to={`sneakers/${name}`}
			transitionDuration={"0.2s"}
			display="flex"
			flexDirection="column"
			gap="1"
			textDecoration={"none"}
			overflow="hidden"
			cursor={"pointer"}
			_hover={{
				transform: "scale(1.05)",
				opacity: 0.9,
			}}
			pb="5"
		>
			<Center overflow="hidden" height="300px" background="#F8F8F8">
				<Center p="1rem">
					<Image
						width={{ base: "auto", sm: "80%" }}
						src={image}
						height="auto"
						color="transparent"
						loading="lazy"
						decoding="async"
					/>
				</Center>
			</Center>
			<Center flexDir="column" gap="0.5rem" padding="1rem">
				<Text fontSize={20} fontWeight={800}>
					{name}
				</Text>
				<Flex>
					{Array(rate)
						.fill(null)
						.map((a, i) => {
							return <Image width={25} height={25} key={`star${i}`} src={StarActivate} />;
						})}
					{Array(5 - rate)
						.fill(null)
						.map((a, i) => {
							return <Image width={25} height={25} key={`star${i}`} src={StarDisable} />;
						})}
				</Flex>
				<Text fontWeight={800}>
					À partir de <span style={{ color: "#D4AA7D" }}>{price} €</span>
				</Text>
				<Text>
					Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{realPrice} €</span> (-
					{discount}%)
				</Text>
			</Center>
		</ChakraLink>
	);
};

export default ShoeLinkBox;
