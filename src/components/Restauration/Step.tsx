import { Box, Flex, Image, Text } from "@chakra-ui/react";

import StepDecoration from '@assets/Restauration/step-decoration.png'

type Props = {
    title: string
    description: string
    image: string
    index: number
}

const Step = ({title, description, image, index}: Props) => {
    return (
        <Box>
            <Flex
                flexDirection='column'
            >
                <Text
                    marginBottom={6}
                    fontWeight={700}
                >
                    Étape { index }
                </Text>
                <Flex
                    marginBottom={10}
                    justifyContent='space-between'
                >
                    <Flex
                        width='48%'
                    >
                        <Image 
                            src={ image } 
                            objectFit='cover'
                        />
                    </Flex>
                    <Flex
                        borderRadius={8}
                        width='48%'
                        background='#F6F6F6'
                        paddingX={6}
                        paddingY={5}
                        flexDirection='column'
                        position='relative'
                    >
                        <Image
                            position='absolute'
                            src={StepDecoration}
                            objectFit='contain'
                            width='80px'
                            top={0}
                            right={10}
                        />
                        <Text
                            fontSize={20}
                            fontWeight={900}
                            marginBottom={5}
                        >
                            { title }
                        </Text>
                        <Text>
                            { description }
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Step