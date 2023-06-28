import { Flex, FormControl, FormLabel, Radio, RadioGroup, Select, Text } from '@chakra-ui/react'

import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const FromStep = ({ register, errors }: Props) => {
    return (
        <Flex
            flexDirection={'column'}
            gap={5}
        >
            <Text
                fontSize={20}
                fontWeight={'bold'}
            >
                Provenance (facultatif)
            </Text>
            <Text
                marginBottom={3}
            >
                Cette information ne sera pas divulgué publiquement
            </Text>
            <FormControl
                width={'max-content'}
            >
                <FormLabel>
                    Lieu d'achat :
                </FormLabel>
                <RadioGroup defaultValue='shop'>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <Radio
                            value='shop'
                            {...register('buyPlace')}
                        >
                            En boutique
                        </Radio>
                        <Radio
                            {...register('buyPlace')}
                            value='private'
                        >
                            Sur des sites de ventes privées
                        </Radio>
                        <Radio
                            {...register('buyPlace')}
                            value='foreign'
                        >
                            Acheté à l'étranger
                        </Radio>
                        <Radio
                            {...register('buyPlace')}
                            value='other'
                        >
                            Autres (cadeau offert, héritage, etc...)
                        </Radio>
                    </Flex>
                </RadioGroup>
            </FormControl>

            <FormControl>
                    <FormLabel>Année d'achat :</FormLabel>
                    <Select 
                        {...register('buyYear')}
                        placeholder='Ex: 2023'
                        background={'#F3F3F3'}
                        borderColor={'#C5C5C5'}
                    >
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </Select>
                    {
                        errors.buyYear &&
                        <Text
                            color={'red'}
                        >
                            {errors.buyYear.message}
                        </Text>
                    }
                </FormControl>
        </Flex>
    )
}

export default FromStep