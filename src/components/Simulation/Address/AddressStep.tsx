import { Flex, Text, Input } from '@chakra-ui/react'
import React from 'react'

const AddressStep = () => {
    return (
        <Flex
            flexDirection={'column'}
            gap={5}
            width={'100%'}
        >
            <Text
                fontSize={20}
                fontWeight={'bold'}
            >
                Ajouter une adresse
            </Text>
            <Flex
                flexDirection={'column'}
            >
                <Text
                    fontWeight={'bold'}
                    marginBottom={'10px'}
                >
                    Pays
                </Text>
                <Input
                    placeholder='Ex: France'
                    background={'#F3F3F3'}
                    borderColor={'#C5C5C5'}
                />
            </Flex>
            <Flex
                flexDirection={'column'}
            >
                <Text
                    fontWeight={'bold'}
                    marginBottom={'10px'}
                >
                    Votre adresse
                </Text>
                <Input
                    placeholder='Cherchez une adresse'
                    background={'#F3F3F3'}
                    borderColor={'#C5C5C5'}
                />
            </Flex>
        </Flex>
    )
}

export default AddressStep