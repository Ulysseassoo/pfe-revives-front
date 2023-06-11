import { Box } from "@chakra-ui/react"

import Header from "@components/Restauration/Header"
import Steps from "@components/Restauration/Steps"
import BeforeAfter from "@components/Restauration/BeforeAfter"
import SecondLife from "@components/Sneakers/SecondLife"
import SneakerCategory from "@components/Sneakers/SneakerCategory"
import Footer from "@components/Footer"
import SneakerFooter from "@components/Sneakers/SneakerFooter"

import SecondLifeBackground from "@assets/Restauration/seconde-life.png"
import Newsletter from "@components/Home/Newsletter"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"

const Restauration = () => {
	return (
		<Box as="section">
			<Header />
			<Steps />
			<BeforeAfter />
			<SecondLife
				title="Donner une seconde vie à vos sneakers !"
				description="Vous voulez proter vos anciennces sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau"
				image={SecondLifeBackground}
			/>
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} marginTop={10}>
				<SneakerCategory title="Revente de sneakers" nbrOfShoe={6} rate="3" />
			</Box>
			<Newsletter />
			<Footer />
		</Box>
	)
}

export default Restauration
