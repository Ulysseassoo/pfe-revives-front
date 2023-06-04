import { Link } from "react-router-dom"
import { Link as ChakraLink, Icon } from "@chakra-ui/react"
import StarActivate from "@assets/Common/Illustration/star-activate.svg"
import StarDisable from "@assets/Common/Illustration/star-disable.svg"
import { Center, Flex, Image, Text } from "@chakra-ui/react"
import { ShoeInterface } from "@inteface/ShoeInterface"
import ShoeImgDefault from "@assets/Sneakers/sneaker-detail-1.png"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { addFavorite, removeFavorite, selectFavorites } from "@store/reducers/Favorites"
import useFavorite from "@hooks/useFavorite"

const ShoeLinkBox = ({ Photo, price, real_price, model, rate, shoe_id }: ShoeInterface) => {
	const discount = Math.round(((real_price - price) / real_price) * 100)
	const dispatch = useAppDispatch()
	const favorites = useAppSelector(selectFavorites)
	const isShoeFavorite = Boolean(favorites.find((favor) => favor.shoes_shoe_id === shoe_id))
	const useFav = useFavorite()

	const toggleFavorite = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		e.preventDefault()
		if (isShoeFavorite) {
			await useFav.deleteProductFromFavorites(shoe_id, model)
		} else {
			await useFav.addProductToFavorites(shoe_id, model)
		}
	}

	return (
		<ChakraLink
			as={Link}
			to={`/sneakers/${model}`}
			transitionDuration={"0.2s"}
			display="flex"
			flexDirection="column"
			gap="1"
			textDecoration={"none"}
			overflow="hidden"
			cursor={"pointer"}
			role="group"
			_hover={{
				transform: "scale(1.05)",
				opacity: 0.9
			}}
			pb="5">
			<Center overflow="hidden" height="300px" background="#F8F8F8" position="relative">
				<Center p="1rem">
					<Image
						width={{ base: "auto", sm: "80%" }}
						src={Photo[0] !== undefined ? Photo[0].image_url : ShoeImgDefault}
						height="auto"
						color="transparent"
						loading="lazy"
						decoding="async"
					/>
				</Center>
				<Icon
					_groupHover={{
						opacity: 1
					}}
					_hover={{
						transform: "scale(1.15)"
					}}
					opacity={0}
					transition="0.3s all ease-in-out"
					as={isShoeFavorite ? BsHeartFill : BsHeart}
					onClick={toggleFavorite}
					boxSize={5}
					color="black"
					position="absolute"
					top="4"
					left="4"
					zIndex={999}
				/>
			</Center>
			<Center flexDir="column" gap="0.5rem" padding="1rem">
				<Text fontSize={20} fontWeight={800}>
					{model}
				</Text>
				<Flex>
					{Array(rate)
						.fill(null)
						.map((a, i) => {
							return <Image width={25} height={25} key={`star${i}`} src={StarActivate} />
						})}
					{Array(5 - rate)
						.fill(null)
						.map((a, i) => {
							return <Image width={25} height={25} key={`star${i}`} src={StarDisable} />
						})}
				</Flex>
				<Text fontWeight={800}>
					À partir de <span style={{ color: "#D4AA7D" }}>{price} €</span>
				</Text>
				<Text>
					Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{real_price} €</span> (-
					{discount}%)
				</Text>
			</Center>
		</ChakraLink>
	)
}

export default ShoeLinkBox
