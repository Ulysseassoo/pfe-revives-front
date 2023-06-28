import { Flex, Textarea, Text } from '@chakra-ui/react'
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const DescriptionStep = ({ register, errors }: Props) => {
    return (
        <Flex
            flexDirection={'column'}
            width={'100%'}
        >
            <Text
                fontSize={20}
                fontWeight={'bold'}
                marginBottom={3}
            >
                Description
            </Text>
            <Textarea 
                {...register('description')}
                width={'100%'}
                placeholder='Veuillez faire une breve description de votre produit...' 
            />
            {
                errors.description &&
                <Text
                    color={'red'}
                >
                    {errors.description.message}
                </Text>
            }
        </Flex>
    )
}

export default DescriptionStep