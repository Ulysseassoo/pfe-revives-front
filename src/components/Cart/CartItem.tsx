import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { CartProduct } from "@inteface/CartInterface";
import { useAppDispatch } from "@store/hooks";
import { removeItem, removeProduct } from "@store/reducers/Cart";
import React from "react";
import { BsTrash } from "react-icons/bs";

interface Props {
	shoe: CartProduct;
}

const CartItem = ({ shoe }: Props) => {
	const dispatch = useAppDispatch();

	return (
		<Flex gap="1.25rem" w="full" borderBottom="1px solid transparent" borderBottomColor="gray.200" p="1.25rem">
			<Box
				w={{ lg: "200px", base: "100px" }}
				flexShrink={0}
				style={{
					aspectRatio: "1/1",
				}}
			>
				<Image w="90%" background="#F8F8F8" src={shoe.Photo[0].image_url} alt={shoe.model} />
			</Box>
			<Flex flexDir="column" w="full">
				<Flex justifyContent={"space-between"} alignItems="center">
					<Text fontWeight={"600"} fontSize={{ lg: "2xl", base: "xl" }}>
						{shoe.model}
					</Text>
					<Text mt="2" color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
						€ {shoe.price * shoe.quantity}
					</Text>
				</Flex>
				<Text fontWeight="500" color="rgba(0,0,0,0.5)" display="block">
					{shoe.brand}
				</Text>
				<Flex alignItems="center" justifyContent="space-between" mt="20">
					<Flex alignItems="center" gap={{ lg: "8", base: "10" }} fontSize={{ lg: "md", md: "sm" }}>
						<Flex alignItems="center" gap="1">
							<Text fontWeight="semibold">Taille: {shoe.size}</Text>
						</Flex>
						<Flex alignItems="center" gap="1">
							<Text fontWeight="semibold">Quantité: {shoe.quantity}</Text>
						</Flex>
					</Flex>
					<Icon
						as={BsTrash}
						color="rgba(0,0,0,0.5)"
						boxSize={5}
						cursor={"pointer"}
						_hover={{
							color: "black",
						}}
						onClick={() => {
							dispatch(removeItem(shoe.shoe_id));
							dispatch(removeProduct(shoe.shoe_id));
						}}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default CartItem;
