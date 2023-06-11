import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react"
import Footer from "@components/Footer"
import React from "react"
import { Link } from "react-router-dom"

const Failed = () => {
	return (
		<Box as="section">
			<Center h="80vh">
				<Flex flexDir="column" w="800px" gap="4" borderRadius={"md"} border="1px solid transparent" borderColor="black" p="8">
					<Heading fontSize="3xl">Il y a eu une erreur avec votre achat !</Heading>
					<Text fontWeight="600">Votre commande n'a pas été pris en compte.</Text>
					<Text textDecor="underline" fontWeight={"500"} to="/sneakers" as={Link}>
						Continuer votre shopping
					</Text>
				</Flex>
			</Center>
			<Footer />
		</Box>
	)
}

export default Failed
