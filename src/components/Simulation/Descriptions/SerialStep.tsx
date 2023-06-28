import { Flex, Text, Input } from '@chakra-ui/react'
import React from 'react'
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const SerialStep = ({ register, errors }: Props) => {
    return (
        <Flex
            flexDirection={'column'}
            gap={5}
        >
            <Text
                fontSize={20}
                fontWeight={'bold'}
            >
                Numéro de série
            </Text>
            <Text>
                Cette information ne sera pas divulgué publiquement
            </Text>
            <Input 
                {...register('serialNumber')}
                placeholder='Ex: 000 000 000' 
                background={'#F3F3F3'}
                borderColor={'#C5C5C5'}
            />
            {
                errors.serialNumber &&
                <Text
                    color={'red'}
                >
                    {errors.serialNumber.message}
                </Text>
            }
        </Flex>
    )
}

export default SerialStep