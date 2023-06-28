import { Flex, Text, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const Price = ({ register, errors }: Props) => {
    return (
        <Flex
            width={'100%'}
            flexDirection={'column'}
        >
            <Text
                fontSize={25}
                fontWeight={'bold'}
            >
                Prix
            </Text>

            <FormControl>
                <FormLabel>Prix d'origine</FormLabel>
                <Input 
                    {...register('price')}
                    width={{
                        base: '100%',
                        lg: '150px',
                        md: '150px',
                        sm: '100%'
                    }}
                    placeholder='Ex: 150'
                    background={'#F3F3F3'}
                    borderColor={'#C5C5C5'}
                />
                 {
                    errors.price &&
                    <Text
                        color={'red'}
                    >
                        {errors.price.message}
                    </Text>
                }
            </FormControl>

        </Flex>
    )
}

export default Price