import { Flex, FormControl, FormLabel, Box, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'
import { Inputs } from "@pages/Simulator";

import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
}
const MaterialStep = ({ register }: Props) => {
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
                lg: 'row',
                sm: 'column',
                md: 'column',
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
                px={'15px'}
            >
                <FormLabel>
                    Matières
                </FormLabel>
                <RadioGroup
                    defaultValue='paillettes'
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
                                {...register('material')}
                                value='paillettes'
                            >
                                Paillettes
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='caoutchouc'
                            >
                                Caoutchouc
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='cuir'
                            >
                                Cuir
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('material')}
                                value='toile'
                            >
                                Toile
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='polyester'
                            >
                                Polyester
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='plastique'
                            >
                                Plastique
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('material')}
                                value='vinyle'
                            >
                                Vinyle
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='suede'
                            >
                                Suede
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='autres'
                            >
                                Autres
                            </Radio>
                        </Flex>
                    </Flex>
                </RadioGroup>
            </FormControl>
            <Box
                height={'100%'}
                width={'1px'}
                background={'#E3E3E3'}
            />

            <FormControl
                width={'max-content'}
                px={'20px'}
            >
                <FormLabel>
                    Imprimé
                </FormLabel>
                <RadioGroup defaultValue='Uni'>
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
                                {...register('material')}
                                value='Uni'
                            >
                                Uni
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='Fleuri'
                            >
                                Fleuri
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='Crocodile'
                            >
                                Crocodile
                            </Radio>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                        >
                            <Radio
                                {...register('material')}
                                value='Rayures'
                            >
                                Rayures
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='Zèbre'
                            >
                                Zèbre
                            </Radio>
                            <Radio
                                {...register('material')}
                                value='Autres'
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

export default MaterialStep