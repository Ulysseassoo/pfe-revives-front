import { Box, Flex, Text } from "@chakra-ui/react"
import Questions from "@components/Faq/Questions"
import Footer from "@components/Footer"
import Newsletter from "@components/Home/Newsletter"

const index = () => {
    return (
        <Box>
            <Flex
                px={{
                    lg: 5,
                    md: 5,
                    sm: 5,
                    base: 5
                }}
                my={10}
                marginBottom={20}
                flexDirection={{
                    lg: 'row',
                    md: 'row',
                    sm: 'column',
                    base: 'column'
                }}
            >
                <Flex
                    width={{
                        lg: '30%',
                        md: '30%',
                        sm: '100%',
                        base: '100%'
                    }}
                    justifyContent={'center'}
                >
                    <Box
                        position={'relative'}
                        height={'min-content'}
                        marginBottom={{
                            sm: '20px',
                            base: '20px'
                        }}
                    >
                        <Text
                            fontSize={50}
                            position={"relative"}
                            fontWeight={'bold'}
                            zIndex={2}
                        >
                            FAQ
                        </Text>
                        <Box
                            position={'absolute'}
                            bottom={2}
                            right={0}
                            width={{
                                lg: '150%',
                                md: '150%',
                                sm: '100%',
                                base: '100%'
                            }}
                            height={5}
                            background={'#D4AA7D'}
                        />
                    </Box>
                </Flex>
                <Box
                    width={{
                        lg: '70%',
                        md: '70%',
                        sm: '100%',
                        base: '100%'
                    }}
                >
                    <Questions />
                </Box>
            </Flex>
            <Newsletter />
            <Footer />
        </Box>
    )
}

export default index