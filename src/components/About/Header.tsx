import { Box, Flex, Image, Text } from "@chakra-ui/react";

import BackgroundImage from '@assets/About/page-background.png'
import ReviveLogo from '@assets/About/revive-logo.png'

const Header = () => {
    return (
        <Flex position='relative'>
            <Image 
                w='100%'
                src={BackgroundImage} 
                objectFit='contain'
            />
            <Box
                position='absolute' 
                w='50%'    
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)" 
            >
                <Image 
                    src={ReviveLogo} 
                    objectFit='contain'
                />
                <Text
                    textAlign='center'
                    color='white'
                    marginTop='2'
                >
                    Et son histoire
                </Text>
            </Box>
        </Flex>

    )
}

export default Header