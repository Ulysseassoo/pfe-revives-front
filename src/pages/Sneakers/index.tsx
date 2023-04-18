import React from 'react'
import { Box } from '@chakra-ui/react'

import TitleWithLogoBackground from '@components/Common/TitleWithLogoBackground'
import ShoeListing from '@components/Sneakers/ShoeListing'
import SecondLife from '@components/Sneakers/SecondLife'
import SneakerCategory from '@components/Sneakers/SneakerCategory'
import SneakerFooter from '@components/Sneakers/SneakerFooter'

import { dummyShoes } from '@dummyDatas/Shoes'

const Sneakers = () => {
	return (
		<Box>
			<Box
				paddingX={20}
			>
				<TitleWithLogoBackground title='NOS SNEAKERS PRÉFÉRÉES' subtitle='PRODUIT' />
				<ShoeListing isFilter={true} shoes={dummyShoes} />
			</Box>
			<SecondLife />
			<SneakerCategory title='Les mieux notés' nbrOfShoe={3} />
			<SneakerCategory title='Les bons plans' nbrOfShoe={3} />
			<SneakerFooter />
		</Box>
	)
};

export default Sneakers;
