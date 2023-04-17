import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'

import SecondLifeImage from '@assets/Sneakers/second-life.png'

const SecondLife = () => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            marginY={10}
            background='#1C1C1C'
            paddingX={20}
            paddingY={10}
            paddingBottom='100px'
        >
            <Text
                color='#D4AA7D'
                fontSize={25}
                marginBottom={10}
            >
                Donner une seconde vie 
            </Text>
            <Flex>
                <Flex
                    width='50%'
                    justifyContent='flex-end'
                    >
                    <Box
                        width='60%'
                        marginRight={20}
                        position='relative'
                    >
                        <Image 
                            src={SecondLifeImage}
                            position='relative'
                            zIndex={2}
                        />
                        <Box 
                            width='100%' 
                            height='100%'
                            position='absolute'
                            left={-5}
                            top={5}
                            zIndex={1}
                            background='#D4AA7D'
                        />
                    </Box>
                </Flex>
                <Flex
                    width='50%'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='flex-start'
                    gap={10}
                >
                    <Text
                        width='70%'
                        color='white'
                    >
                        Vous voulez porter vos anciennes sneakers
                        mais elles sont trop usées. Grâce à nous vous
                        pourrez les porter à nouveau.
                    </Text>
                    <Button
                        background='#D4AA7D'
                        color='white'
                        paddingX={25}
                    >
                        En savoir plus
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SecondLife