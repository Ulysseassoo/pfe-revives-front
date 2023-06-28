import { Flex, Text, FormControl, FormLabel, RadioGroup, Radio } from '@chakra-ui/react'
import React from 'react'
import { Inputs } from "@pages/Simulator";

import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
}
const PackagingStep = ({ register }: Props) => {
    return (
        <Flex
            flexDirection={'column'}
            gap={5}
        >
            <Text
                fontSize={20}
                fontWeight={'bold'}
            >
                Packaging (facultatif)
            </Text>
            <FormControl
                width={'max-content'}
            >
                <FormLabel>
                    Lieu d'achat :
                </FormLabel>
                <RadioGroup defaultValue='Box'>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <Radio
                            {...register('packaging')}
                            value='Box'
                        >
                            Boite à chaussure
                        </Radio>
                        <Radio
                            {...register('packaging')}
                            value='dustbag'
                        >
                            Dustbag
                        </Radio>
                        <Radio
                            {...register('packaging')}
                            value='other'
                        >
                            Autres
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>
        </Flex>
    )
}

export default PackagingStep