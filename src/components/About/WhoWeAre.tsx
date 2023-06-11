import { Box, Flex, Image, Text } from "@chakra-ui/react"

import ReviveAboutPartBackground from "@assets/About/revive-about-part1-background.png"
import ReviveAboutWhoBackground from "@assets/About/revive-about-who-background.png"

import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"

const WhoWeAre = () => {
	return (
		<Box>
			<Box paddingX={50}>
				<TitleWithLogoBackground title="QUI SOMMES NOUS ?" subtitle="DÉBUT" />
			</Box>

			<Flex justifyContent="center">
				<Image src={ReviveAboutPartBackground} paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} marginY={20} />
			</Flex>

			<Flex marginY={20} paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} gap={20} flexDirection="column" alignItems="center" textAlign="left">
				<Box>
					<Text fontWeight="bold" fontSize={{ lg: 30, base: 24 }} marginBottom={15}>
						Mais qui est Revive'S ?
					</Text>
					<Text>
						Aujourd’hui, la mode est une des industries la plus polluante dans le monde. Chaque année en France, plus de 415 millions de paires de
						chaussures sont achetées, soit plus de 13 paires de chaussures chaque seconde, ou 243 000 tonnes de chaussures par an ! En France, plus de
						24 millions de paires de chaussures sont produites. Cette consommations peut avoir des conséquences désastreuses pour la planète et
						l’environnement. Revive's est un artisan sneakerier renommé dans le monde de la restauration de sneakers. Ils se sont spécialisés dans la
						rénovation et la revitalisation des chaussures, offrant des services de qualité pour redonner vie aux paires usées ou endommagées. Avec
						leur expertise et leur attention aux détails, ils sont capables de traiter une variété de problèmes, tels que la réparation des semelles,
						la restauration des matériaux décolorés ou déchirés, et même la personnalisation des sneakers selon les préférences des clients. Revive's
						utilise des techniques avancées et des produits de haute qualité pour s'assurer que chaque paire de sneakers restaurée retrouve son éclat
						d'origine. Leur travail méticuleux et leur engagement envers la satisfaction du client en ont fait une référence dans l'industrie de la
						restauration de sneakers.
					</Text>
				</Box>
				<Box objectFit="contain">
					<Image src={ReviveAboutWhoBackground} />
				</Box>
			</Flex>
		</Box>
	)
}

export default WhoWeAre
