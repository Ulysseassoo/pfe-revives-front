import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Footer from "@components/Footer"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"
import React from "react"

const Favorites = () => {
	return (
		<Box>
			<Flex gap="12" flexDir="column" w="full" padding={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<Flex flexDir="column" gap="2">
					<Heading as="h2" mt="4">
						Favoris
					</Heading>
				</Flex>
			</Flex>

			<Footer />
		</Box>
	)
}

export default Favorites
