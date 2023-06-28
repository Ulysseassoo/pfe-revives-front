import { Flex, Text, Grid, Box } from "@chakra-ui/react";

import jordan from '@assets/Simulation/jordan.png'
import nike from '@assets/Simulation/nike.png'
import adidas from '@assets/Simulation/adidas.png'
import newBalance from '@assets/Simulation/new-balance.png'

import SelectShoeFormBox from "@components/Simulation/SelectShoeFormBox"
import { Inputs } from "@pages/Simulator";

import { UseFormSetValue } from "react-hook-form";

type ShoeType = {
    image: string
    name: string
    value: 'jordan' | 'nike' | 'adidas' | 'newBalance'
}

type Props = {
    increaseStep: () => void
    setValue: UseFormSetValue<Inputs>
}

const SelectShoeForm = ({ increaseStep, setValue }: Props) => {

    const shoesType: ShoeType[] = [
        {
            image: jordan,
            name: 'Jordan',
            value: 'jordan'
        },
        {
            image: nike,
            name: 'Nike',
            value: 'nike'
        },
        {
            image: adidas,
            name: 'Adidas',
            value: 'adidas'
        },
        {
            image: newBalance,
            name: 'New Balance',
            value: 'newBalance'
        }
    ]

    return (
        <Flex
            width={'100%'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            marginBottom={55}
        >
            <Text
                fontSize={'30px'}
                fontWeight={'bold'}
                marginTop={5}
                marginBottom={5}
            >
                Rendez vos sneakers
            </Text>
            <Text
                fontSize={'25px'}
                fontWeight={'400'}
                marginBottom={10}
            >
                Quels types de sneakers voulez-vous revendre ?
            </Text>

            <Flex
                width={'50%'}
                justifyContent={'center'}
                gap={10}
                wrap={'wrap'}
            >
                {
                    shoesType.map((shoeType, index) => {
                        return (
                            <Box
                                key={index}
                                onClick={() => {
                                    increaseStep()
                                    setValue('type', shoeType.value)
                                }}
                                cursor={'pointer'}
                            >
                                <SelectShoeFormBox
                                    shoeImage={shoeType.image}
                                    shoeName={shoeType.name}
                                />
                            </Box>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default SelectShoeForm