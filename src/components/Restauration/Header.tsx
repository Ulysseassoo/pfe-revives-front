import { Box, Flex, Image, Text } from "@chakra-ui/react"

import HeaderBackground from "@assets/Restauration/header-background.png"

const Header = () => {
	return (
		<Box>
			<Flex position="relative" justifyContent="center" alignItems="center">
				<Image src={HeaderBackground} />
				<Text color="white" position="absolute" fontSize={{ lg: 30, sm: 20, base: "sm" }} textAlign="center" fontWeight={900}>
					Venez restaurez vos chaussures <br />
					en quelques clics
				</Text>
			</Flex>
		</Box>
	)
}

export default Header
