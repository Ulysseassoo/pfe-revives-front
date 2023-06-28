import { Flex, Text, FormControl, FormLabel, Select, Checkbox, FormErrorMessage } from '@chakra-ui/react'
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const SizeStep = ({ register, errors }: Props) => {
    return (
        <Flex
            flexDirection={'column'}
        >
            <Text
                fontSize={25}
                fontWeight={'bold'}
            >
                Taille
            </Text>
            <Text
                fontStyle={'italic'}
                marginBottom={3}
            >
                Veuillez renseigner la taille exacte donnée sur l'étiquette
            </Text>

            <Flex
                gap={5}
                flexDirection={{
                    lg: 'row',
                    sm: 'column',
                    md: 'row',
                    base: 'column'
                }}
            >
                <FormControl>
                    <FormLabel>Pays</FormLabel>
                    <Select 
                        {...register('sizeType')}
                        placeholder='Select country'
                        background={'#F3F3F3'}
                        borderColor={'#C5C5C5'}
                    >
                        <option>EU</option>
                        <option>CH</option>
                    </Select>
                    {
                        errors.sizeType &&
                        <Text
                            color={'red'}
                        >
                            {errors.sizeType.message}
                        </Text>
                    }
                </FormControl>

                <FormControl>
                    <FormLabel>Taille</FormLabel>
                    <Select 
                        {...register('size')}
                        placeholder='Ex: 45'
                        background={'#F3F3F3'}
                        borderColor={'#C5C5C5'}
                    >
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                    </Select>
                    {
                        errors.size &&
                        <Text
                            color={'red'}
                        >
                            {errors.size.message}
                        </Text>
                    }
                </FormControl>
            </Flex>

            <Flex
                marginTop={12}
                flexDirection={'column'}
            >
                <Text
                    fontSize={25}
                    fontWeight={'bold'}
                >
                    Vintage (facultatif)
                </Text>
                <Text
                    fontStyle={'italic'}
                    marginBottom={3}
                >
                    Si cet article a plus de 15 ans
                </Text>
                <Checkbox
                    {...register('vintage')}
                >
                    Oui
                </Checkbox>
            </Flex>
        </Flex>
    )
}

export default SizeStep