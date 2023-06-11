import { Box, Flex, Image, Text } from "@chakra-ui/react"

import JordanBefore from "@assets/Restauration/jordan-before.png"
import JordanAfter from "@assets/Restauration/jordan-after.png"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"

const BeforeAfter = () => {
	return (
		<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} marginBottom={120}>
			<Flex justifyContent="space-between" flexDir={{ base: "column", lg: "row" }}>
				<Flex flexDirection="column" justifyContent="center" alignItems="center" width={{ lg: "48%", base: "100%" }}>
					<Text width="100%" textAlign="center" marginBottom={5} color="#D4AA7D" fontWeight={700}>
						Avant
					</Text>
					<Flex background="#F6F6F6" borderRadius={8} justifyContent="center" alignItems="center">
						<Image width={{ lg: "50%", base: "100%" }} objectFit="contain" src={JordanBefore} />
					</Flex>
				</Flex>
				<Flex flexDirection="column" justifyContent="center" alignItems="center" width={{ lg: "48%", base: "100%" }}>
					<Text width="100%" textAlign="center" marginBottom={5} color="#D4AA7D" fontWeight={700}>
						Après
					</Text>
					<Flex background="#F6F6F6" borderRadius={8} justifyContent="center" alignItems="center">
						<Image width={{ lg: "50%", base: "100%" }} objectFit="contain" src={JordanAfter} />
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}

export default BeforeAfter
