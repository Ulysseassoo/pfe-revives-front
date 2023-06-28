import { Flex, FormControl, FormLabel, Box, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'

import { Inputs } from "@pages/Simulator";

import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
}

const CategoryStep = ({ register }: Props) => {
    return (
        <Flex
            width={{
                lg: 'max-content',
                md: '100%',
                sm: '100%',
                base: '100%'
            }}
            border={'solid 1px #DADADA'}
            py={'15px'}
            flexDirection={{
                md: "row",
                lg: 'row',
                sm: "column",
                base: 'column'
            }}
            gap={{
                md: "15px",
                sm: "15px",
                lg: '0',
                base: '15px'
            }}
        >
            <FormControl
                width={'max-content'}
                px={'20px'}
            >
                <FormLabel>
                    Sous-catégories
                </FormLabel>
                <RadioGroup defaultValue='Basses'>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <Radio
                            value='Basses'
                            {...register('subCategory')} 
                        >
                            Basses
                        </Radio>
                        <Radio
                            value='Montantes'
                            {...register('subCategory')} 
                        >
                            Montantes
                        </Radio>
                        <Radio
                            value='Autres'
                            {...register('subCategory')} 
                        >
                            Autres
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>

            <Box
                display={{
                    md: "none",
                    sm: "none",
                    lg: 'flex',
                    base: 'none'
                }}
                height={'100%'}
                width={'1px'}
                background={'#E3E3E3'}
            />

            <FormControl
                width={'max-content'}
                px={'15px'}
            >
                <FormLabel>
                    Modèle
                </FormLabel>
                <RadioGroup
                    defaultValue='Air Jordan Retro'
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
                            wrap={'wrap'}
                        >
                            <Radio
                                value='Air Jordan Retro'
                                {...register('model')} 
                            >
                                Air Jordan Retro
                            </Radio>
                            <Radio
                                value='Air Jordan 1'
                                {...register('model')} 
                            >
                                Air Jordan 1
                            </Radio>
                            <Radio
                                value='Air Jordan Dub'
                                {...register('model')} 
                            >
                                Air Jordan Dub
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                value='Jordan Luka'
                                {...register('model')} 
                            >
                                Jordan Luka
                            </Radio>
                            <Radio
                                value='Jordan Point Lane'
                                {...register('model')} 
                            >
                                Jordan Point Lane
                            </Radio>
                            <Radio
                                value='Jordan Air Mid'
                                {...register('model')} 
                            >
                                Jordan Air Mid
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                value='Jordan 1 Retro'
                                {...register('model')} 
                            >
                                Jordan 1 Retro
                            </Radio>
                            <Radio
                                value='Jordan Point Lane'
                                {...register('model')} 
                            >
                                Jordan Point Lane
                            </Radio>
                            <Radio
                                value='Autres'
                                {...register('model')} 
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

export default CategoryStep