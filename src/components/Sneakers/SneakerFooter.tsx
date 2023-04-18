import React from 'react'
import { Flex, Image, Text, Input } from '@chakra-ui/react'

import FooterBackground from '@assets/Sneakers/footer-background.png'

const SneakerFooter = () => {
    return (
        <Flex
            bgGradient="linear(to-r, #ECD4BA, rgba(236, 212, 186, 0))"
        >
            <Flex 
                w='50%'
                flexDirection='column'
                justifyContent='center'
                paddingX={10}
                gap={10}
            >
                <Text
                    fontSize={30}
                    fontFamily='metropolis'
                    fontWeight={900}
                >
                    Laissez-nous votre mail pour plus d'information !
                </Text>
                <Flex>
                    <Input 
                        type='text' placeholder='Ecrivez votre mail...' 
                        background='white'
                        border='none'
                        w='70%'
                        borderTopRightRadius={0}
                        borderBottomRightRadius={0}
                    />
                    <Input 
                        type='submit' 
                        value='Envoyer' 
                        w='30%'
                        background='#D4AA7D'
                        color='white'
                        border='none'
                        borderTopLeftRadius={0}
                        borderBottomLeftRadius={0}
                    />
                </Flex>
            </Flex>
            <Flex
                w='50%'
                justifyContent='flex-end'
                alignItems='flex-end'
            >
                <Image 
                    src={FooterBackground} 
                    objectFit='contain'
                    height='80%'
                />
            </Flex>
        </Flex>
    )
}

export default SneakerFooter