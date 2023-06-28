import { Flex, FormControl, FormLabel, Box, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'
import { Inputs } from "@pages/Simulator";

import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
}
const ColorStep = ({ register }: Props) => {
    return (
        <Flex
            border={'solid 1px #DADADA'}
            py={'15px'}
            width={{
                lg: 'max-content',
                md: '100%',
                sm: '100%',
                base: '100%'
            }}
        >

            <FormControl
                width={'max-content'}
                px={'15px'}
            >
                <FormLabel>
                    Couleurs
                </FormLabel>
                <RadioGroup
                    defaultValue='beige'
                >
                    <Flex
                        flexDirection={{
                            lg: 'row',
                            sm: 'column',
                            md: 'row',
                            base: 'column'
                        }}
                        gap={10}
                    >
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('color')}
                                value='beige'
                            >
                                Beige
                            </Radio>
                            <Radio
                                {...register('color')}
                                value='rouge'
                            >
                                Rouge
                            </Radio>
                            <Radio
                                {...register('color')}
                                value='noir'
                            >
                                Noir
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('color')}
                                value='métalisé'
                            >
                                Métalisé
                            </Radio>
                            <Radio
                                {...register('color')}
                                value='argenté'
                            >
                                Argenté
                            </Radio>
                            <Radio
                                {...register('color')}
                                value='turquoise'
                            >
                                Turquoise
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('color')}
                                value='violet'
                            >
                                Violet
                            </Radio>
                            <Radio
                                {...register('color')}
                                value='autres'
                            >
                                Autres
                            </Radio>
                        </Flex>
                    </Flex>
                </RadioGroup>
            </FormControl>
        </Flex>
    )
}

export default ColorStep