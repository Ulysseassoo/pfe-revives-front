import { Box, Circle, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { IconType } from "react-icons/lib"
import { Link } from "react-router-dom"

interface Props {
	IconItem?: IconType
	title: string
	subtitle: string
	position: {
		left: string
		top: string
	}
	to: string
}

const AccountCard = ({ title, position, to, subtitle, IconItem }: Props) => {
	return (
		<Box
			as={Link}
			to={to}
			height="175px"
			boxShadow={"md"}
			borderRadius="lg"
			_hover={{
				boxShadow: "lg"
			}}
			background="white"
			position="relative"
			overflow="hidden"
			transition="0.2s ease-in-out all">
			<Circle background="primary" size="300px" position="absolute" top={position.top} left={position.left} />
			<Flex justifyContent="center" w="full" h="full" gap="2" flexDir="column" p="4" position="relative" zIndex="4">
				{IconItem && <Icon as={IconItem} boxSize="10" />}
				<Text fontWeight={"semibold"} fontSize="lg">
					{title}
				</Text>
				<Text>{subtitle}</Text>
			</Flex>
		</Box>
	)
}

export default AccountCard
