import { Box, Flex, Image, Text } from "@chakra-ui/react";

import JordanBefore from '@assets/Restauration/jordan-before.png'
import JordanAfter from '@assets/Restauration/jordan-after.png'

const BeforeAfter = () => {
    return (
        <Box
            paddingX={20}
            marginBottom={120}
        >
            <Flex
                justifyContent='space-between'
            >
                <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    width='48%'
                >
                    <Text
                        width='100%'
                        textAlign='center'
                        marginBottom={5}
                        color='#D4AA7D'
                        fontWeight={700}
                    >
                        Avant
                    </Text>
                    <Flex
                        background='#F6F6F6'
                        borderRadius={8}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Image 
                            width='50%'
                            objectFit='contain'
                            src={JordanBefore}
                        />
                    </Flex>
                </Flex>
                <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    width='48%'
                >
                    <Text
                        width='100%'
                        textAlign='center'
                        marginBottom={5}
                        color='#D4AA7D'
                        fontWeight={700}
                    >
                        Après
                    </Text>
                    <Flex
                        background='#F6F6F6'
                        borderRadius={8}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Image 
                            width='50%'
                            objectFit='contain'
                            src={JordanAfter}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default BeforeAfter