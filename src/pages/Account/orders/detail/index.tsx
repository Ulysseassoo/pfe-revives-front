import { Box, Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Image } from "@chakra-ui/react"

import checking from '@assets/Account/checking.png'
import delivery from '@assets/Account/delivery.png'
import repare from '@assets/Account/repare.png'
import tic from '@assets/Account/tic.png'
import transport from '@assets/Account/transport.png'
import { useNavigate } from "react-router-dom"

const index = () => {

    const navigate = useNavigate()

    const steps = [
        {
            name: 'Réception de vos chaussures',
            illustration: transport,
            state: 'check'
        },
        {
            name: 'Analyse de vos chaussures',
            illustration: checking,
            state: 'check'
        },
        {
            name: 'Restauration',
            illustration: repare,
            state: 'check'
        },
        {
            name: 'Livraison',
            illustration: delivery,
            state: 'En cours'
        },
    ]

    return (
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Text
                my={10}
                fontWeight={'bold'}
                fontSize={25}
                textAlign={'center'}
            >
                Voici le suivi de votre commande
            </Text>

            <Flex
                px={5}
                justifyContent={'space-evenly'}
                flexWrap={'wrap'}
                gap={5}
            >
                {
                    steps.map((step, index) => {
                        return (
                            <Flex
                                minWidth={'260px'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                gap={5}
                                padding={5}
                                background={'#F5F5F5'}
                                borderRadius={5}
                            >
                                <Text fontWeight={'semibold'}>Etape {index + 1}</Text>
                                <Image  width={'50px'} height={'50px'} src={step.illustration} />
                                <Text fontWeight={'semibold'} textAlign={'center'}>{step.name}</Text>
                                {
                                    step.state === 'check' 
                                    ? 
                                    <Image src={tic} width={'50px'} height={'50px'} />
                                    : 
                                    <Text>En cours</Text>
                                }
                            </Flex>
                        )
                    })
                }
            </Flex>

            <Button
                my={10}
                width={'min-content'}
                onClick={() => {
                    navigate('/account/orders')
                }}
            >
                Retour
            </Button>
        </Flex>
    )
}

export default index