import { Box, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<Box textAlign="center" py={10} px={6}>
			<Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, primary, primaryHover)" backgroundClip="text">
				404
			</Heading>
			<Text fontSize="18px" mt={3} mb={2}>
				Page non trouvé
			</Text>
			<Text color={"gray.500"} mb={6}>
				La page que vous cherchez n'existe pas
			</Text>

			<Button as={Link} to="/" colorScheme="primary" bgGradient="linear(to-r, primary, primary, primaryHover)" color="white" variant="solid">
				Repartir vers l'accueil
			</Button>
		</Box>
	)
}
