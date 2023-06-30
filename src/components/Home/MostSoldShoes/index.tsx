import { Flex, Center, Heading, useMediaQuery, Text, Box, Image, Grid } from "@chakra-ui/react"
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme"
import { Link } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"
import React from "react"
import { dummyShoes } from "@dummyDatas/Shoes"
import StarActivate from "@assets/Common/Illustration/star-activate.svg"
import StarDisable from "@assets/Common/Illustration/star-disable.svg"
import Catalog from "../Catalog"
import { useListShoesQuery } from "@store/api/Shoes"
import ShoeLinkBox from "@components/Common/ShoeLinkBox"

const MostSoldShoes = () => {
	const { data } = useListShoesQuery({
		brand: "Jordan",
		take: "5",
		gt: 95
	})
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)")
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)")

	if (!data) {
		return <></>
	}

	return (
		<Flex as="section" paddingY="1rem" paddingX={isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP} flexDir="column" gap="3rem">
			<Center>
				<Center flexDir="column" gap="4" maxW={isSmallerThan890 ? "90%" : "80%"}>
					<Heading textTransform={"uppercase"} color="primary" as="h2" fontWeight="extrabold" textAlign="center" fontSize="4xl">
						Modèles les plus vendus
					</Heading>
					<Text textAlign={"center"} fontSize="lg" lineHeight={"1.75rem"} fontWeight="300">
						Le top des ventes de chaussures : Des modèles qui captivent l'attention de tous les passionnés de sneakers.
					</Text>
				</Center>
			</Center>
			<Flex w="full" gap="8" flexDirection={isSmallerThan980 ? "column" : "row"}>
				<Box flex="1">
					<ChakraLink
						as={Link}
						to={`/sneakers/${data.data[0].model}`}
						transitionDuration={"0.2s"}
						display="flex"
						flexDirection="column"
						gap="1"
						height="full"
						width="full"
						textDecoration={"none"}
						overflow="hidden"
						cursor={"pointer"}
						_hover={{
							transform: "scale(1.05)",
							opacity: 0.9
						}}
						key={`${data.data[0].shoe_id}`}
						pb="5">
						<Center height={isSmallerThan980 ? "400px" : "full"} background="#F8F8F8">
							<Center p="1rem">
								<Image src={data.data[0].Photo[0].image_url} height="auto" color="transparent" loading="lazy" decoding="async" />
							</Center>
						</Center>
						<Center flexDir="column" gap="0.5rem" padding="1rem">
							<Text fontSize={20} fontWeight={800}>
								{data.data[0].model}
							</Text>
							<Flex>
								{Array(data.data[0].rate)
									.fill(null)
									.map((a, index) => {
										return <Image width={25} height={25} key={`star${index}`} src={StarActivate} />
									})}
								{Array(5 - data.data[0].rate)
									.fill(null)
									.map((a, index) => {
										return <Image width={25} height={25} key={`star${index}`} src={StarDisable} />
									})}
							</Flex>
							<Text fontWeight={800}>
								À partir de <span style={{ color: "#D4AA7D" }}>{data.data[0].price} €</span>
							</Text>
							<Text>
								Prix neuf: <span style={{ textDecoration: "line-through", fontWeight: 900 }}>{data.data[0].real_price} €</span> (-
								{45}%)
							</Text>
						</Center>
					</ChakraLink>
				</Box>
				<Grid
					flex="1"
					gap={"2rem"}
					gridTemplateColumns={{
						md: "repeat(2,minmax(0,1fr))",
						sm: "repeat(1,minmax(0,1fr))"
					}}>
					{data.data.slice(1, 5).map((shoe, index) => (
						<ShoeLinkBox key={shoe.shoe_id} {...shoe} />
					))}
				</Grid>
			</Flex>
		</Flex>
	)
}

export default MostSoldShoes
