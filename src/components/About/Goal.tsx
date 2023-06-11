import { Box, Flex, Image, Text } from "@chakra-ui/react"

import GoalBackground from "@assets/About/goal-background.png"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"

const Goal = () => {
	return (
		<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
			<Text fontWeight="bold" fontSize={30} marginBottom={55} textAlign="center">
				Notre but ?
			</Text>
			<Flex justifyContent="space-between" flexDir={{ lg: "row", base: "column" }} gap={{ lg: "0", base: 10 }}>
				<Text w={{ lg: "45%", base: "full" }}>
					Le but de Revive's est de redonner vie aux sneakers usées ou endommagées en les restaurant et en les revitalisant. Leur objectif est de
					permettre aux propriétaires de sneakers de prolonger la durée de vie de leurs chaussures préférées et de les faire paraître aussi proches
					que possible de leur état d'origine. Revive's s'efforce de fournir des services de restauration de haute qualité, en utilisant des
					techniques et des produits spécialisés pour traiter les problèmes spécifiques de chaque paire de sneakers. Ils visent à satisfaire les
					clients en offrant une attention méticuleuse aux détails, en respectant les demandes et les préférences individuelles, et en veillant à ce
					que les sneakers restaurées soient impeccables et prêtes à être portées à nouveau. Leur but ultime est de raviver l'amour et l'attachement
					que les propriétaires ont pour leurs sneakers, tout en préservant leur valeur esthétique et sentimentale.
				</Text>
				<Image w={{ lg: "45%", base: "full" }} src={GoalBackground} alt="shoe on the ground, all grey" />
			</Flex>
		</Box>
	)
}

export default Goal
