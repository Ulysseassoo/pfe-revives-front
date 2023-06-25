import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import React from "react"
import { GrEdit } from "react-icons/gr"

interface Props {
	children?: React.ReactNode
	onClick?: () => void
	text?: string
}

const AccountContainer = ({ children, onClick, text }: Props) => {
	return (
		<Flex
			flexDir="column"
			p="6"
			as="section"
			border="1px solid #AEAEAE"
			m="4"
			gap="10"
			borderRadius={"lg"}
			position="relative"
			boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
			<Box position="relative">
				{onClick && text ? (
					<HStack
						position="absolute"
						right="0"
						top="0"
						spacing="2"
						cursor={"pointer"}
						_hover={{
							opacity: 0.6
						}}
						onClick={onClick}
						transition="all 0.3s ease-in-out">
						<Icon as={GrEdit} />
						<Text fontWeight={"semibold"}>{text}</Text>
					</HStack>
				) : null}

				{children}
			</Box>
		</Flex>
	)
}

export default AccountContainer
