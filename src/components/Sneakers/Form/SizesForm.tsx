import { Flex, Button, Text, useToast, Image, FormErrorMessage, FormControl } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { ShoeInterface, Size } from "@inteface/ShoeInterface"
import { CartFormData, cartSchema } from "@services/schemas/Cart"
import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import TruckSvg from "@assets/Common/Illustration/truck.svg"
import HomeSvg from "@assets/Common/Illustration/home.svg"
import { createFavorite } from "@services/Api/Favorite"
import { addFavorite } from "@store/reducers/Favorites"
import useFavorite from "@hooks/useFavorite"
import { CartProduct } from "@inteface/CartInterface"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { addProduct, setProducts } from "@store/reducers/Cart"

type Sizes = {
	size: number
	isAvailable: boolean
}

const sizesNumbers: Sizes[] = []

for (let i = 38; i <= 50; i += 0.5) {
	sizesNumbers.push({
		size: i,
		isAvailable: true // Set the availability as per your logic
	})
}

interface Props {
	sizes: Size[]
	shoe: ShoeInterface
}

const SizesForm = ({ sizes, shoe }: Props) => {
	const dispatch = useAppDispatch()
	const { isAuthenticated } = useAppSelector((state) => state.auth)
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()
	const useFav = useFavorite()
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<CartFormData>({
		mode: "onChange",
		resolver: yupResolver(cartSchema)
	})

	const onSubmit = async (data: CartFormData) => {
		await addProductCart(data.size)
	}

	const addProductCart = async (size: number) => {
		setIsLoading(true)
		try {
			if (isAuthenticated) {
				await dispatch(addProduct({ shoe, size }))
			} else {
				const localProducts = localStorage.getItem("products")
				if (localProducts !== null) {
					const prdts = JSON.parse(localProducts) as CartProduct[]
					const existingItem = prdts.find((i) => i.shoe_id === shoe.shoe_id && i.size === size)

					if (existingItem) {
						existingItem.quantity += 1
					} else {
						prdts.push({ ...shoe, quantity: 1, size })
					}

					localStorage.setItem("products", JSON.stringify(prdts))
					dispatch(setProducts(prdts))
				}
			}
			toast({
				title: "Succès",
				description: `${shoe.model} ajouté avec succès au panier`,
				status: "success"
			})
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			toast({
				title: "Erreur",
				description: "Le produit n'a pas pu être ajouté au panier, veuillez réessayer",
				status: "error"
			})
		}
	}

	return (
		<>
			<Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column" gap={2} marginBottom={5}>
				<Text fontWeight={900}>TAILLES</Text>
				<FormControl isRequired isInvalid={Boolean(errors.size)}>
					<Flex mb="8" gap={5} wrap="wrap">
						{sizesNumbers.map((size, index) => {
							return (
								<Controller
									control={control}
									name="size"
									key={size.size}
									render={({ field: { onChange, onBlur, value } }) => (
										<Button
											border="2px solid transparent"
											borderColor={value === size.size ? "black" : "transparent"}
											onBlur={onBlur}
											onClick={() => {
												if (sizes.find((s) => s.size === size.size)) {
													onChange(size.size)
												}
											}}
											background="#F6F6F6"
											width="80px"
											height="40px"
											justifyContent="center"
											alignItems="center"
											value={value}
											borderRadius={5}>
											<Text color={sizes.find((s) => s.size === size.size) ? "#000" : "rgba(0,0,0,0.25)"}>{size.size}</Text>
										</Button>
									)}
								/>
							)
						})}
					</Flex>
					{errors.size && <FormErrorMessage>{errors.size.message}</FormErrorMessage>}
				</FormControl>
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
						background: "primaryHover"
					}}
					onClick={() => handleSubmit(onSubmit)()}
					isLoading={isLoading}>
					Ajouter au panier
				</Button>
				<Button
					borderColor="gray.200"
					_hover={{
						borderColor: "primary",
						background: "white"
					}}
					borderWidth={1}
					color="#D4AA7D"
					background="white"
					borderRadius={5}
					onClick={() => useFav.addProductToFavorites(shoe.shoe_id, shoe.model)}
					isLoading={useFav.isLoadingFavorites}>
					Ajouter aux favoris
				</Button>
			</Flex>
		</>
	)
}

export default SizesForm
