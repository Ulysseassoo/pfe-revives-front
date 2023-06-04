import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import ShoeLinkBox from "@components/Common/ShoeLinkBox"
import Footer from "@components/Footer"
import { useAppSelector } from "@store/hooks"
import { selectFavorites } from "@store/reducers/Favorites"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"
import React from "react"

const Favorites = () => {
	const favorites = useAppSelector(selectFavorites)

	return (
		<Box as="section">
			<Flex gap="12" flexDir="column" w="full" padding={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<Flex flexDir="column" gap="2">
					<Heading as="h2" mt="4">
						Favoris
					</Heading>
				</Flex>
			</Flex>

			<Grid
				gap={"2rem"}
				gridTemplateColumns={{
					lg: "repeat(3,minmax(0,1fr))",
					md: "repeat(2,minmax(0,1fr))",
					sm: "repeat(1,minmax(0,1fr))"
				}}
				paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				{favorites.map((fav) => (
					<ShoeLinkBox {...fav.shoe} key={fav.shoes_shoe_id} />
				))}
			</Grid>

			<Footer />
		</Box>
	)
}

export default Favorites
