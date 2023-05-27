import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import CartItem from "@components/Cart/CartItem";
import Footer from "@components/Footer";
import { CartProduct } from "@inteface/CartInterface";
import { useAppSelector } from "@store/hooks";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import React from "react";

const Cart = () => {
	const { products } = useAppSelector((state) => state.cart);

	const calculateTotalItems = (products: CartProduct[]): number => {
		return products.reduce((total, product) => total + product.quantity, 0);
	};

	const calculateTotalPrice = (products: CartProduct[]): number => {
		return products.reduce((total, product) => total + product.price * product.quantity, 0);
	};

	return (
		<>
			<Center h={products.length > 0 ? "auto" : "80vh"} as="section" flexDir="column">
				{products.length === 0 ? (
					<VStack spacing="4">
						<Heading>Votre panier est vide</Heading>
						<Text textAlign={"center"}>
							Il semblerait que vous n'ayez rien ajouter à votre panier. <br /> Allez explorer notre catalogue de
							chaussures.
						</Text>
					</VStack>
				) : (
					<>
						<Heading as="h2" mt="4">
							Mon panier
						</Heading>
						<Flex gap="12" h="full" w="full" padding={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
							<Box w="60%">
								<Heading fontSize="xl" as="h3">
									Produits
								</Heading>
								<Flex gap="4" flexDir="column">
									{products.map((product) => (
										<CartItem key={product.shoe_id} shoe={product} />
									))}
								</Flex>
							</Box>
							<Box w="40%">
								<Heading fontSize="xl" as="h3" mb="3">
									Récapitulatif de la commande
								</Heading>

								<Box borderBottom="1px solid transparent" borderBottomColor="gray.200" pb="4">
									<Flex alignItems="center" justifyContent={"space-between"}>
										<Text fontSize="lg">Sous-total</Text>
										<Text color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
											€ {calculateTotalPrice(products)}
										</Text>
									</Flex>
									<Text display="block" fontSize="md">
										{calculateTotalItems(products)} articles
									</Text>
								</Box>
							</Box>
						</Flex>
					</>
				)}
			</Center>
			<Footer />
		</>
	);
};

export default Cart;
