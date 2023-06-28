import { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import SelectShoeForm from "@components/Simulation/SelectShoeForm"
import FormHeader from "@components/Simulation/FormHeader"
import InformationForm from '@components/Simulation/Informations/Form'
import DescriptionForm from '@components/Simulation/Descriptions/Form'
import StateForm from '@components/Simulation/State/Form'
import Estimate from '@components/Simulation/Estimate/PriceResume'
import SelectShoeFormBox from "@components/Simulation/SelectShoeFormBox";

import jordan from '@assets/Simulation/jordan.png'
import nike from '@assets/Simulation/nike.png'
import adidas from '@assets/Simulation/adidas.png'
import newBalance from '@assets/Simulation/new-balance.png'

import { SubmitHandler, useForm } from "react-hook-form";

import { informationSchema, descriptionSchema, stateSchema } from "@services/schemas/Simulator";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type Inputs = {
    type: 'jordan' | 'nike' | 'adidas' | 'newBalance'
    subCategory: string
    model: string
    material: string
    printed: string
    color: string
    sizeType: string
    size: string
    vintage?: boolean
    description: string
    buyPlace: string
    buyYear: string
    serialNumber: number | null
    packaging: string
    state: string
    price: string
}

const index = () => {

    const NUMBER_OF_STEPS = 5

    const [currentStep, setCurrentStep] = useState<number>(1)

    const getResolver = () => {
        switch (currentStep) {
            case 2:
                return yupResolver(informationSchema)
            case 3:
                return yupResolver(descriptionSchema)
            case 4:
                return yupResolver(stateSchema)
        }
    }

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        defaultValues: {
            type: 'jordan',
            subCategory: 'basse',
            model: 'air jordan retro',
            material: 'paillettes',
            printed: 'uni',
            color: 'beige',
            sizeType: '',
            size: '',
            vintage: false,
            description: '',
            buyPlace: 'shop',
            buyYear: '',
            serialNumber: null,
            packaging: 'box',
            state: 'perfect',
            price: '',
        },
        mode: 'onChange',
        resolver: getResolver()
    })

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(data)
    }

    const increaseStep = () => {
        if ((currentStep < NUMBER_OF_STEPS && isValid) || currentStep === 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const decreaseStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const getImageOfShoeSelected = (): string => {
        switch (getValues('type')) {
            case 'jordan':
                return jordan
            case 'adidas':
                return adidas
            case 'nike':
                return nike
            case 'newBalance':
                return newBalance
            default:
                return '';
        }
    }

    return (
        <Flex
            width={'100%'}
            flexDirection={'column'}
            px={{
                md: "40px",
                sm: "20px",
                lg: '30',
                base: '20px'
            }}
            paddingBottom={20}
        >

            <Flex
                display={{
                    md: "none",
                    sm: "none",
                    lg: 'flex',
                    base: 'none'
                }}
            >
                <FormHeader
                    currentStep={currentStep}
                />
            </Flex>

            {
                currentStep === 1 &&
                <SelectShoeForm
                    increaseStep={increaseStep}
                    setValue={setValue}
                />
            }

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    width: '100%'
                }}
            >
                {
                    currentStep > 1 &&
                    <Flex
                        gap={10}
                        width={'100%'}
                        flexDirection={{
                            md: "column",
                            sm: "column",
                            lg: 'row',
                            base: 'column'
                        }}
                        alignItems={{
                            md: "center",
                            sm: "center",
                            lg: 'flex-start',
                        }}
                    >

                        {
                            currentStep < 5 &&
                            <Box>
                                <SelectShoeFormBox
                                    shoeImage={getImageOfShoeSelected()}
                                    shoeName={getValues('type')}
                                />
                            </Box>
                        }

                        <Flex
                            flexDirection={'column'}
                            width={{
                                md: "100%",
                                sm: "100%",
                                lg: '100%',
                                base: '100%'
                            }}
                        >
                            {
                                currentStep === 2 && <InformationForm register={register} errors={errors} />
                            }
                            {
                                currentStep === 3 && <DescriptionForm register={register} errors={errors} />
                            }
                            {
                                currentStep === 4 && <StateForm register={register} errors={errors} />
                            }
                            {
                                currentStep === 5 && <Estimate price={'180'} state="Parfaite état" decreaseStep={decreaseStep} />
                            }
                        </Flex>
                    </Flex>
                }

                {
                    currentStep > 1 && currentStep < NUMBER_OF_STEPS &&

                    <Flex
                        marginTop={5}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                        gap={8}
                    >
                        <Box
                            onClick={decreaseStep}
                            cursor={'pointer'}
                        >
                            <Text>
                                Retour
                            </Text>
                        </Box>

                        <Button
                            type="submit"
                            onClick={increaseStep}
                            background={'#D4AA7D'}
                            color={'white'}
                            py={2}
                            px={4}
                            borderRadius={5}
                            cursor={'pointer'}
                            _hover={{
                                background: "primaryHover",
                            }}
                        >
                            Suivant
                        </Button>
                    </Flex>
                }
            </form>

        </Flex>
    )
}

export default index