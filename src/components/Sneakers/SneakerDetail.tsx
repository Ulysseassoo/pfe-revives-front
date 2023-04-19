import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'

import StarActivate from '@assets/Common/Illustration/star-activate.svg'
import StarDisable from '@assets/Common/Illustration/star-disable.svg'
import TruckSvg from '@assets/Common/Illustration/truck.svg'
import HomeSvg from '@assets/Common/Illustration/home.svg'

type ShoeProps = {
    title: string
    rate: number
    price: number
    description: string
    sizes: Sizes[]
    photos: string[]
}

type Sizes = {
    size: number,
    isAvailable: boolean
}

const SneakerDetail = (shoe: ShoeProps) => {
    return (
        <Flex
            flexDirection='column'
            marginX={20}
            marginY={10}
        >
            <Flex
                justifyContent='space-between'
                marginBottom={5}
            >
                <Flex
                    width='48%'
                    flexDirection='column'
                >
                    <Image 
                        src={shoe.photos[0]} 
                        width='100%'
                        objectFit='contain'
                        background='#F6F6F6'
                        marginBottom={15}
                    />
                    <Flex
                        justifyContent='space-between'
                    >
                        {
                            shoe.photos.slice(1,4).map((photo, index) => {
                                return (
                                    <Image 
                                        src={photo} 
                                        key={index} 
                                        width='30%'
                                        height='100px'
                                        objectFit='contain'
                                        background='#F6F6F6'
                                    />
                                )
                            })
                        }
                    </Flex>
                </Flex>
                <Flex
                    width='48%'
                    flexDirection='column'
                    fontFamily='metropolis'
                    gap={2}
                >

                    <Text
                        fontWeight={900}
                        fontSize={25}
                    >
                        {shoe.title}
                    </Text>

                    <Flex>
                        {
                            Array(shoe.rate).fill(null).map((a, index) => {
                                return <Image width={25} height={25} key={index} src={StarActivate} />
                            })
                        }
                        {
                            Array(5 - shoe.rate).fill(null).map((a, index) => {
                                return <Image width={25} height={25} key={index} src={StarDisable} />
                            })
                        }
                    </Flex>

                    <Text
                        fontWeight={900}
                    >
                        {shoe.price}€
                    </Text>

                    <Flex
                        flexDirection='column'
                        gap={2}
                        marginBottom={5}
                    >
                        <Text
                            fontWeight={900}
                        >
                            TAILLES
                        </Text>
                        <Flex
                            gap={5}
                            wrap='wrap'
                        >
                            {
                                shoe.sizes.map((size, index) => {
                                    return (
                                        <Button 
                                            key={index}
                                            background='#F6F6F6'
                                            width='80px'
                                            height='40px'
                                            justifyContent='center'
                                            alignItems='center'
                                            borderRadius={5}
                                        >
                                            <Text
                                                color={size.isAvailable ? '#000' : 'rgba(0,0,0,0.25)'}
                                            >
                                                {size.size}
                                            </Text>
                                        </Button>
                                    )
                                })
                            }
                        </Flex>
                    </Flex>

                    <Flex
                        flexDirection='column'
                        gap={2}
                        fontWeight={900}
                        marginBottom={5}
                    >
                        <Flex
                            gap={2}
                        >
                            <Image 
                                src={TruckSvg}
                                width={6}
                            />
                            <Text>
                                Livraison chez vous
                            </Text>
                        </Flex>
                        <Flex
                            gap={2}
                        >
                            <Image 
                                src={HomeSvg}
                                width={6}
                            />
                            <Text>
                                Retrait en magasin
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        gap={5}
                    >
                        <Button
                            background='#D4AA7D'
                            color='white'
                            borderRadius={5}
                        >
                            Acheter
                        </Button>
                        <Button
                            borderColor='#D4AA7D'
                            borderWidth={1}
                            color='#D4AA7D'
                            background='white'
                            borderRadius={5}
                        >
                            Ajouter aux favoris
                        </Button>
                    </Flex>

                </Flex>
            </Flex>
            <Flex
                flexDirection='column'
            >
                <Text
                    color='#D4AA7D'
                    fontFamily='metropolis'
                    fontWeight={900}
                    fontSize={20}
                >
                    Description
                </Text>
                <Text>{shoe.description}</Text>
            </Flex>
        </Flex>
    )
}

export default SneakerDetail