import { Flex } from '@chakra-ui/react'
import DescriptionStep from './DescriptionStep'
import FromStep from './FromStep'
import SerialStep from './SerialStep'
import PackagingStep from './PackagingStep'
import { Inputs } from "@pages/Simulator";

import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}
const Form = ({ register, errors }: Props) => {
    return (
        <Flex
            width={'100%'}
            flexDirection={'column'}
            gap={10}
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
        >
            <DescriptionStep register={register} errors={errors} />
            <FromStep register={register} errors={errors} />
            <SerialStep register={register} errors={errors} />
            <PackagingStep register={register} />
        </Flex>
    )
}

export default Form