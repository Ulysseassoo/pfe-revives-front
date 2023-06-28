import { Flex, Text, Box } from "@chakra-ui/react";

type Props = {
    currentStep: number
}

const FormHeader = ({ currentStep }: Props) => {

    const formSteps = [
        {
            name: 'Marques'
        },
        {
            name: 'Informations'
        },
        {
            name: 'Descriptions'
        },
        {
            name: 'Etat & Prix'
        }
    ]

    return (
        <Flex
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'center'}
            gap={5}
            px={'20%'}
            marginTop={5}
            marginBottom={10}
        >
            {
                formSteps.map((step, index) => {
                    return (
                        <Box
                            cursor={'pointer'}
                        >
                            <Text
                                width={'max-content'}
                                padding={'5px 15px'}
                                background={currentStep === index + 1 ? '#D4AA7D' : '#F1F1F1'}
                                color={currentStep === index + 1 ? 'white' : 'black'}
                                borderRadius={8}
                            >
                                {`${index + 1}. ${step.name}`}
                            </Text>
                        </Box>
                    )
                })
            }
        </Flex>
    )
}

export default FormHeader