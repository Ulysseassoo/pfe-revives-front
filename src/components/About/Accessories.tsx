import { Box, Flex, Text, Image } from "@chakra-ui/react"

import AccessoriesImage from "@assets/About/accessories.png"
import ReviveLogo from "@assets/About/revive-logo.png"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"

const Accessories = () => {
	return (
		<Box marginTop="100px" bgGradient="linear(to-r, rgba(236, 212, 186, 100%), rgba(236, 212, 186, 10%))" position="relative">
			<Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={3}>
				<Image objectFit="cover" src={ReviveLogo} transform="rotate(-15deg)" opacity={0.3} />
			</Flex>

			<Flex position="relative" zIndex={4}>
				<Text w="100%" fontWeight="bold" fontSize={35} paddingBottom="50px" paddingTop="50px" textAlign="center">
					Les accessoires
				</Text>
			</Flex>
			<Flex
				justifyContent="space-between"
				flexDir={{ lg: "row", base: "column" }}
				paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}
				paddingTop={0}
				gap={{ lg: 0, base: 10 }}>
				<Flex w={{ lg: "48%", base: "full" }}>
					<Image objectFit="contain" src={AccessoriesImage} />
				</Flex>
				<Flex w={{ lg: "48%", base: "full" }} justifyContent="center" alignItems="center" pb="4" paddingTop={0}>
					<Text>
						Les accessoires de sneakers sont nombreux et variés. Parmi eux, on trouve des lacets de rechange, qui peuvent être utilisés pour remplacer
						des lacets usés ou simplement pour donner une touche de couleur à ses chaussures. Les semelles intérieures sont également un accessoire
						très populaire, car elles permettent d'améliorer le confort et le soutien des chaussures, ainsi que de réguler l'humidité. Les
						protège-orteils sont également un accessoire utile pour prolonger la durée de vie des sneakers, en protégeant les zones les plus sujettes
						à l'usure et à l'abrasion. Les embouts de lacets sont des petits accessoires qui se placent à l'extrémité des lacets pour éviter qu'ils ne
						s'effilochent ou ne se déchirent. Enfin, les épingles à lacets sont des accessoires amusants qui peuvent être utilisés pour personnaliser
						ses lacets, ou simplement pour ajouter une touche de fantaisie à ses sneakers.
					</Text>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Accessories
