import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

import { getOrders } from "@services/Api/Order"
import OrderInterface from "@inteface/OrderInterface"

import moment from 'moment'
import { useNavigate } from "react-router-dom"

const index = () => {

    const navigation = useNavigate()

    const [orders, setOrders] = useState<OrderInterface[]>([])

    const getOrdersAction = async () => {
        const res = await getOrders()
        setOrders(res)
    }

    useEffect(() => {
        getOrdersAction()
    }, [])

    return (
        <Flex
            flexDirection={'column'}
        >
            <Text
                width={'100%'}
                textAlign={'center'}
                my={10}
                fontWeight={'bold'}
                fontSize={25}
            >
                Voici vos commandes
            </Text>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th textAlign={'center'} >Date</Th>
                            <Th textAlign={'center'} >Nombre d'article(s)</Th>
                            <Th textAlign={'center'} >Prix</Th>
                            <Th textAlign={'center'} >Statut</Th>
                            <Th textAlign={'center'} >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {
                        orders.map((order, index) => {
                            return (
                                <Tr
                                    key={index}
                                >
                                    <Td textAlign={'center'} >{moment(order.created_at).format('LL')}</Td>
                                    <Td textAlign={'center'} >{order.Orders_has_shoes.length}</Td>
                                    <Td textAlign={'center'} >{order.price}</Td>
                                    <Td textAlign={'center'} >En cours</Td>
                                    <Td textAlign={'center'} >
                                        <Button
                                            onClick={() => {
                                                navigation('/account/orders/detail')
                                            }}
                                        >
                                            Voir plus
                                        </Button>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                    </Tbody>
                </Table>
            </TableContainer>

        </Flex>
    )
}

export default index