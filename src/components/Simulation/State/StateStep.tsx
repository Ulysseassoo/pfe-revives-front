import { Flex, FormControl, FormLabel, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { Inputs } from "@pages/Simulator";

import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<Inputs>
}
const StateStep = ({ register }: Props) => {
    return (
        <Flex
            width={'100%'}        

        >
            <FormControl
                width={'100%'}
            >
                <FormLabel
                    fontSize={25}
                    fontWeight={'bold'}
                >
                    Etat
                </FormLabel>
                <RadioGroup 
                    defaultValue='perfect'
                    width={'100%'}
                >
                    <Flex
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <Flex
                            flexDirection={'column'}
                        >
                            <Radio
                                {...register('state')}
                                value='perfect'
                                marginBottom={2}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight={'bold'}
                                >
                                    Jamais porté avec étiquette
                                </Text>
                            </Radio>
                            <Text
                                marginLeft={5}
                                marginBottom={5}
                                paddingRight={20}
                            >
                                Un article jamais porté avec étiquette est un article qui n'a jamais été porté et présente les étiquettes originales d'achat (une photo sera demandée)
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Radio
                                {...register('state')}
                                value='unwear'
                                marginBottom={2}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight={'bold'}
                                >
                                    Jamais porté
                                </Text>
                            </Radio>
                            <Text
                                marginLeft={5}
                                marginBottom={5}
                            >
                                Un article jamais porté avec étiquette est un article qui n'a jamais été porté et présente <br /> les étiquettes originales d'achat (une photo sera demandée)
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Radio
                                {...register('state')}
                                value='good'
                                marginBottom={2}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight={'bold'}
                                >
                                    Très bon état
                                </Text>
                            </Radio>
                            <Text
                                marginLeft={5}
                                marginBottom={5}
                            >
                                Un article jamais porté avec étiquette est un article qui n'a jamais été porté et présente <br /> les étiquettes originales d'achat (une photo sera demandée)
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Radio
                                {...register('state')}
                                value='nice'
                                marginBottom={2}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight={'bold'}
                                >
                                    Bon état
                                </Text>
                            </Radio>
                            <Text
                                marginLeft={5}
                                marginBottom={5}
                            >
                                Un article jamais porté avec étiquette est un article qui n'a jamais été porté et présente <br /> les étiquettes originales d'achat (une photo sera demandée)
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Radio
                                {...register('state')}
                                value='correct'
                                marginBottom={2}
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight={'bold'}
                                >
                                    Correct
                                </Text>
                            </Radio>
                            <Text
                                marginLeft={5}
                                marginBottom={5}
                            >
                                Un article jamais porté avec étiquette est un article qui n'a jamais été porté et présente <br /> les étiquettes originales d'achat (une photo sera demandée)
                            </Text>
                        </Flex>
                    </Flex>
                </RadioGroup>
            </FormControl>
        </Flex>
    )
}

export default StateStep