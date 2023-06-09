import { Box } from "@chakra-ui/react"

import Goal from "@components/About/Goal"
import Header from "@components/About/Header"
import WhoWeAre from "@components/About/WhoWeAre"
import Accessories from "@components/About/Accessories"
import Footer from "@components/Footer"
import SneakerFooter from "@components/Sneakers/SneakerFooter"
import Newsletter from "@components/Home/Newsletter"

const About = () => {
	return (
		<Box>
			<Header />
			<WhoWeAre />
			<Goal />
			<Accessories />
			<Box marginY={55}>
				<Newsletter />
			</Box>
			<Footer />
		</Box>
	)
}

export default About
