import { Box } from "@chakra-ui/react";

import Header from '@components/Restauration/Header'
import Steps from '@components/Restauration/Steps';
import BeforeAfter from '@components/Restauration/BeforeAfter';
import SecondLife from "@components/Sneakers/SecondLife";
import SneakerCategory from '@components/Sneakers/SneakerCategory';
import Footer from "@components/Footer";
import SneakerFooter from "@components/Sneakers/SneakerFooter";

import SecondLifeBackground from '@assets/Restauration/seconde-life.png'

const Restauration = () => {
	return(
		<div>
			<Header />
			<Steps />
			<BeforeAfter />
			<SecondLife 
				title='Donner une seconde vie à vos sneakers !'
				description='Vous voulez proter vos anciennces sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau'
				image={SecondLifeBackground}
			/>
			<Box
				paddingX={20}
				marginTop={10}
			>
				<SneakerCategory title="Revente de sneakers" nbrOfShoe={6} rate="3" />
			</Box>
			<SneakerFooter />
			<Footer /> 
		</div>
	)
};

export default Restauration;
