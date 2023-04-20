import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'

type Props = {
    title: string
    description: string
    image: string
}

const SecondLife = ({title, description, image}: Props) => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            marginY={10}
            background='#1C1C1C'
            paddingY={10}
            paddingBottom='100px'
        >
            <Text
                color='#D4AA7D'
                fontSize={25}
                marginBottom={10}
            >
                {title}
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
                            src={image}
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
                        {description}
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