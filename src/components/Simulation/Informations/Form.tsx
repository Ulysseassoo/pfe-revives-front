import { Flex, Box } from "@chakra-ui/react";

import CategoryStep from '@components/Simulation/Informations/CategoryStep'
import MaterialStep from '@components/Simulation/Informations/MaterialStep'
import ColorStep from '@components/Simulation/Informations/ColorStep'

import SizeStep from "./SizeStep";
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
            gap={10}
            marginBottom={10}
        >
            <Flex
                width={'100%'}
                flexDirection={'column'}
                gap={10}
            >
                <CategoryStep register={register} />
                <MaterialStep register={register} />
                <ColorStep register={register} />
                <SizeStep register={register} errors={errors} />
            </Flex>
        </Flex>
    )
}

export default Form