import { Flex } from "@chakra-ui/react";
import AddressStep from "./AddressStep";

const Form = () => {
    return (
        <Flex
            width={'100%'}
            border={'solid 1px #DADADA'}
            padding={10}
        >
            <AddressStep />
        </Flex>
    )
}

export default Form