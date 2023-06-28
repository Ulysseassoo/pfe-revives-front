
import { Flex, Text, Image } from "@chakra-ui/react";

interface Props {
    shoeImage: string
    shoeName: string
}

const SelectShoeFormBox = ({ shoeImage, shoeName }: Props) => {
    return (
        <Flex
            width={250}
            flexDirection={'column'}
            background={'#F5F5F5'}
            padding={5}
            boxSizing="border-box"
            boxShadow={'2px 2px 1px rgba(0, 0, 0, .14)'}
            borderRadius={8}
        >
            <Image src={shoeImage} />
            <Text
                fontWeight={'bold'}
            >
                { shoeName }
            </Text>
        </Flex>
    )
}

export default SelectShoeFormBox