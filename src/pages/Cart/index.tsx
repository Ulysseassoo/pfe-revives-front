import { Box, Button, Center, Flex, HStack, Heading, Image, List, ListItem, Text, VStack } from "@chakra-ui/react"
import CartItem from "@components/Cart/CartItem"
import Footer from "@components/Footer"
import { CartProduct } from "@inteface/CartInterface"
import { updateCart } from "@services/Api/Cart"
import { checkoutPayment } from "@services/Api/Order"
import { useAppSelector } from "@store/hooks"
import { loadStripe } from "@stripe/stripe-js"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { products, id } = useAppSelector((state) => state.cart)
	const { isAuthenticated } = useAppSelector((state) => state.auth)

	const calculateTotalItems = (products: CartProduct[]): number => {
		return products.reduce((total, product) => total + product.quantity, 0)
	}

	const calculateTotalPrice = (products: CartProduct[]): number => {
		return products.reduce((total, product) => total + product.price * product.quantity, 0)
	}

	const handleCheckout = async () => {
		try {
			setIsLoading(true)
			const stripe = await stripePromise
			const res = await checkoutPayment({ products })
			if (stripe !== null) {
				await updateCart({
					id,
					products: []
				})
				await stripe.redirectToCheckout({
					sessionId: res.sessionId
				})
			}
		} catch (error) {
			console.log("🚀 ~ file: index.tsx:27 ~ handleCheckout ~ error:", error)
			setIsLoading(false)
		}
	}

	return (
		<>
			<Center h={products.length > 0 ? "auto" : "80vh"} as="section" flexDir="column">
				{products.length === 0 ? (
					<VStack spacing="4">
						<Heading>Votre panier est vide</Heading>
						<Text textAlign={"center"}>
							Il semblerait que vous n'ayez rien ajouter à votre panier. <br /> Allez explorer notre catalogue de chaussures.
						</Text>
					</VStack>
				) : (
					<Flex gap="12" flexDir="column" w="full" padding={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
						<Flex flexDir="column" gap="2">
							<Heading as="h2" mt="4">
								Mon panier
							</Heading>
							<Text fontWeight={"bold"}>€ {calculateTotalPrice(products)}</Text>
						</Flex>
						<Flex gap="12" h="full" w="full" flexDir={{ lg: "row", base: "column-reverse" }}>
							<Box w={{ lg: "60%", base: "full" }}>
								<Heading fontSize="xl" as="h3">
									Produits ({products.length})
								</Heading>
								<Flex gap="4" flexDir="column">
									{products.map((product) => (
										<CartItem key={`${product.shoe_id}-${product.size}`} shoe={product} />
									))}
								</Flex>
							</Box>
							<Flex gap="4" w={{ lg: "40%", base: "full" }} flexDir={{ lg: "column", base: "column-reverse" }}>
								<Box>
									<Heading fontSize="xl" as="h3" mb="3">
										Récapitulatif de la commande
									</Heading>
									<Box borderBottom="1px solid transparent" borderBottomColor="gray.200" py="4">
										<Flex alignItems="center" justifyContent={"space-between"}>
											<Text fontSize="lg">Sous-total:</Text>
											<Text color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
												€ {calculateTotalPrice(products)}
											</Text>
										</Flex>
										<Text display="block" fontSize="md">
											{calculateTotalItems(products)} articles
										</Text>
									</Box>
									<Box borderBottom="1px solid transparent" borderBottomColor="gray.200" py="4">
										<Flex alignItems="center" justifyContent={"space-between"}>
											<Text fontSize="lg">Expédition:</Text>
											<Text color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
												Gratuit
											</Text>
										</Flex>
										<Text display="block" fontSize="md">
											3-4 jours ouvrables
										</Text>
									</Box>
									<Box borderBottom="1px solid transparent" borderBottomColor="gray.200" py="4">
										<Flex alignItems="center" justifyContent={"space-between"}>
											<Text fontSize="lg">Total estimé:</Text>
											<Text color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
												€ {calculateTotalPrice(products)}
											</Text>
										</Flex>
										<Text display="block" fontSize="md">
											TVA Incluse
										</Text>
									</Box>
								</Box>

								<Flex flexDir="column">
									{isAuthenticated ? (
										<Button
											mt="8"
											p="2"
											py="6"
											w="full"
											background="primary"
											color="white"
											onClick={handleCheckout}
											_hover={{
												background: "primaryHover"
											}}
											borderRadius="none"
											isLoading={isLoading}>
											Paiment
										</Button>
									) : (
										<Button
											as={Link}
											to={"/login"}
											mt="8"
											p="2"
											py="6"
											w="full"
											background="primary"
											color="white"
											_hover={{
												background: "primaryHover"
											}}
											borderRadius="none"
											state={{ from: "cart" }}>
											Se connecter
										</Button>
									)}

									{isAuthenticated ? (
										<Box mt="4">
											<Text fontSize="sm">Payer avec :</Text>
											<HStack dir="" gap="4" mt="2">
												<Box width="50px" height="50px">
													<Image
														src="https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/backpages/ic_mastercard.png"
														alt="mastercard"
														objectFit="contain"
													/>
												</Box>
												<Box width="50px" height="50px">
													<Image
														src="https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/backpages/ic_visa.png"
														alt="visa"
														objectFit="contain"
													/>
												</Box>
											</HStack>
										</Box>
									) : null}
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				)}
			</Center>
			<Footer />
		</>
	)
}

export default Cart
