import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { ShoeInterface } from '@inteface/ShoeInterface'

import FilterLogo from '@assets/Common/Illustration/filter-logo.svg'
import ArrowDown from '@assets/arrow-down.svg'

import ShoeBox from '@components/Common/ShoeBox'

type PropsType = {
    filter: boolean
    shoes: ShoeInterface[]
}

const ShoeListing = ({filter, shoes}: PropsType) => {
    return (
        <>
            {
                filter 
                &&    
                <Flex 
                    w='100%' 
                    justifyContent='flex-end'
                    gap={10}
                    marginBottom={10}
                >
                    <Flex
                        gap={1}
                        alignItems='center'
                    >
                        <Text>Filter</Text>
                        <Image 
                            src={FilterLogo} 
                            h='70%'
                        />
                    </Flex>
                    <Flex
                        gap={1}
                        alignItems='center'
                    >
                        <Text>Trier</Text>
                        <Image 
                            src={ArrowDown} 
                        />
                    </Flex>
                </Flex>
            }

            <Flex
                wrap='wrap'
                paddingX={20}
            >
                {
                    shoes.map((shoe, index) => {
                        return (
                            <Box 
                                w='33%'
                                marginBottom={10}
                            >
                                <ShoeBox key={index} image={shoe.image} name={shoe.name} price={shoe.price} realPrice={shoe.realPrice} rate={shoe.rate} />
                            </Box>
                        )
                    })
                }
            </Flex>
        </>

    )
}

export default ShoeListing