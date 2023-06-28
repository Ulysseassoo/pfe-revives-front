import { Flex, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

interface Props {
    price: string
    state: string
    decreaseStep: () => void
}

const PriceResume = ({ price, state, decreaseStep }: Props) => {

    const navigation = useNavigate()

    return (
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            gap={5}
        >
            <Text
                fontWeight={'bold'}
                fontSize={20}
            >
                Estimation du prix
            </Text>

            <Box 
                width={'80%'}
                height={'1px'}
                background={'#E3E3E3'}
            />

            <Flex
                flexDirection={'column'}
                alignItems={'center'}
                gap={5}
            >
                <Text
                    fontWeight={'bold'}
                    fontSize={20}
                    textAlign={'center'}
                >
                    Notre estimation pour cette paire de sneakers est de
                </Text>
                <Text
                    fontWeight={'bold'}
                    fontSize={30}
                >
                    { price } €
                </Text>

                <Flex
                    gap={{
                        base: 2,
                        lg: 10,
                        md: 10,
                        sm: 2
                    }}
                    flexDirection={{
                        base: 'column',
                        lg: 'row',
                        md: 'row',
                        sm: 'column'
                    }}
                >
                    <Box
                        border={'solid 1px #D4AA7D'}
                        py={2}
                        px={4}
                        borderRadius={5}
                        color={'#D4AA7D'}
                        cursor={'pointer'}
                        onClick={() => {
                            decreaseStep()
                        }}
                    >
                        <Text>
                            Retourner au formulaire
                        </Text>
                    </Box>

                    <Box
                        background={'#D4AA7D'}
                        py={2}
                        px={4}
                        borderRadius={5}
                        color={'white'}
                        textAlign={'center'}
                        cursor={'pointer'}
                        onClick={() => {
                            navigation('/')
                        }}
                    >
                        <Text>
                            Retourner à l'accueil
                        </Text>
                    </Box>
                </Flex>

            </Flex>

            <Flex
                width={'70%'}
                justifyContent={'space-between'}
                alignItems={'center'}
                color={'#CACACA'}
                border={'solid 1px #CACACA'}
                padding={5}
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                }}
            >

                <Text>
                    État esthétique : 
                </Text>

                <Text>
                    { state }
                </Text>

            </Flex>

        </Flex>
    )
}

export default PriceResume