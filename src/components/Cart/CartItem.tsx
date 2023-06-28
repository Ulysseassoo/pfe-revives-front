import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { CartProduct } from "@inteface/CartInterface"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { removeItem, removeProduct, setProducts } from "@store/reducers/Cart"
import React from "react"
import { BsTrash } from "react-icons/bs"

interface Props {
	shoe: CartProduct
}

const CartItem = ({ shoe }: Props) => {
	const dispatch = useAppDispatch()
	const { isAuthenticated } = useAppSelector((state) => state.auth)

	const removeCartProduct = async () => {
		if (isAuthenticated) {
			dispatch(removeItem({ shoe_id: shoe.shoe_id, size: shoe.size }))
			dispatch(removeProduct(shoe.shoe_id))
		} else {
			const localProducts = localStorage.getItem("products")
			if (localProducts !== null) {
				const prdts = JSON.parse(localProducts) as CartProduct[]
				const updatedProducts = prdts.filter((product) => {
					if (product.shoe_id === shoe.shoe_id && product.size === shoe.size) {
						return null
					}

					return product
				})

				localStorage.setItem("products", JSON.stringify(updatedProducts))
				dispatch(setProducts(updatedProducts))
			}
		}
	}
	return (
		<Flex
			gap="1.25rem"
			w="full"
			borderBottom="1px solid transparent"
			borderBottomColor="gray.200"
			p={{ lg: "1.25rem", base: "1.25rem 0" }}
			flexDir={{ lg: "row", base: "column" }}>
			<Box
				w={{ lg: "200px", base: "full" }}
				flexShrink={0}
				style={{
					aspectRatio: "1/1"
				}}>
				<Image w={{ lg: "90%", base: "full" }} background="#F8F8F8" src={shoe.Photo[0].image_url} alt={shoe.model} />
			</Box>
			<Flex flexDir="column" w="full">
				<Flex justifyContent={"space-between"} alignItems="center">
					<Text fontWeight={"600"} fontSize={{ lg: "2xl", md: "xl", base: "sm" }}>
						{shoe.model}
					</Text>
					<Text mt="2" color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize={{ lg: "md", base: "sm" }}>
						€ {(shoe.price - 20) * shoe.quantity}
					</Text>
				</Flex>
				<Text fontWeight="500" color="rgba(0,0,0,0.5)" display="block">
					{shoe.brand}
				</Text>
				<Flex justifyContent={"space-between"} alignItems="center" mt="2">
					<Text fontWeight={"600"} fontSize={"md"}>
						Frais de nettoyage
					</Text>
					<Text mt="2" color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize="sm">
						€ {10 * shoe.quantity}
					</Text>
				</Flex>
				<Flex justifyContent={"space-between"} alignItems="center" mt="2">
					<Text fontWeight={"600"} fontSize={"md"}>
						Frais de recoloration
					</Text>
					<Text mt="2" color="rgba(0,0,0,0.5)" fontWeight={"700"} fontSize="sm">
						€ {10 * shoe.quantity}
					</Text>
				</Flex>
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
							color: "black"
						}}
						onClick={removeCartProduct}
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default CartItem
