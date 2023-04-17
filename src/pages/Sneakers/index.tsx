import React from 'react'
import { Box } from '@chakra-ui/react'

import TitleWithLogoBackground from '@components/Common/TitleWithLogoBackground'
import ShoeListing from '@components/Sneakers/ShoeListing'
import SecondLife from '@components/Sneakers/SecondLife'

import { dummyShoes } from '@dummyDatas/Shoes'

const Sneakers = () => {
	return (
		<Box
			paddingX={20}
		>
			<TitleWithLogoBackground title='NOS SNEAKERS PRÉFÉRÉES' subtitle='PRODUIT' />

			<ShoeListing filter={true} shoes={dummyShoes} />

			<SecondLife />
		</Box>
	)
};

export default Sneakers;
