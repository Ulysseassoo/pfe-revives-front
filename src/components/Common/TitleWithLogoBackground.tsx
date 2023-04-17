import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import ReviveTitleBackground from './../../assets/About/revive-title-background.png'

type PropsType = {
    title: string
    subtitle: string
}

const TitleWithLogoBackground = ({ title, subtitle }: PropsType) => {
    return (
        <Flex 
            position='relative' 
            marginY={25}
        >
            <Image 
                src={ReviveTitleBackground} 
                paddingY={5}
            />
            <Box 
                position='absolute'
                left="50%"
                top="65%"
                transform="translate(-50%, -50%)" 
                textAlign='center'
            >
                <Text
                    color='#000000'
                    fontSize={50}
                    fontWeight='900'
                    fontFamily='Metropolis'
                >
                    {title}
                </Text>
                <Text
                    color='#D4AA7D'
                    fontSize={35}
                    fontWeight='900'
                    fontFamily='Metropolis'
                >
                    {subtitle}
                </Text>
            </Box>
        </Flex>
    )
}

export default TitleWithLogoBackground