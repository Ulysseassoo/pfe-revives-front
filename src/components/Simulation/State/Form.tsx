import { Flex, Box } from "@chakra-ui/react";
import StateStep from "./StateStep";
import Price from "./Price";
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const Form = ({ register, errors }: Props) => {
    return (
        <Flex
            border={{
                base: 'hidden',
                lg: 'solid 1px #DADADA',
                md: 'solid 1px #DADADA',
                sm: 'hidden'
            }}
            padding={{
                base: 1,
                lg: 10,
                md: 10,
                sm: 1
            }}
            width={'100%'}
            alignItems={'center'}
            flexDirection={'column'}

        >
            <StateStep register={register} />

            <Box 
                my={10}
                width={'70%'}
                height={'1px'}
                background={'#DADADA'}
            />

            <Price register={register} errors={errors} />
        </Flex>
    )
}

export default Form