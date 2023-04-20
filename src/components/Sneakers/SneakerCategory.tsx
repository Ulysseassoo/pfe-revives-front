import React from 'react'
import { Box, Flex, Image, Text, Input } from '@chakra-ui/react'

import ShoeListing from './ShoeListing'

import { dummyShoes } from '@dummyDatas/Shoes'

type Props = {
    title: string
    nbrOfShoe: number
}

const SneakerCategory = ({title, nbrOfShoe}: Props) => {

    const shoesToDisplay = dummyShoes.slice(0, nbrOfShoe)
    return (
        <Flex
            flexDirection='column'
        >
            <Box
                paddingX={20}
                marginBottom={5}
            >
                <Text
                    fontSize={20}
                    fontWeight={900}
                    fontFamily='metropolis'
                >
                    {title}
                </Text>
            </Box>

            <ShoeListing isFilter={false} shoes={shoesToDisplay} />
        </Flex>
    )
}

export default SneakerCategory