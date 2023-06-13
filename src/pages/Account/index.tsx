import { Avatar, Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { useAppSelector } from "@store/hooks"
import StarActivate from "@assets/Common/Illustration/star-activate.svg"
import React from "react"
import AccountCards from "@components/Account/AccountCards"

const Account = () => {
	const { isAuthenticated, user } = useAppSelector((state) => state.auth)

	return (
		<Flex
			flexDir="column"
			p="6"
			as="section"
			border="1px solid #AEAEAE"
			m="4"
			gap="10"
			borderRadius={"lg"}
			boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
			<Flex gap="6">
				<Center background="gray.200" height={{ lg: "200px", base: "100px" }} width={{ lg: "200px", base: "100px" }} borderRadius="lg">
					<Avatar size={{ lg: "2xl", base: "lg" }} bg="primary" name={`${user?.first_name} ${user?.last_name}`} />
				</Center>
				<Flex flexDir="column" justifyContent="space-between">
					<Flex flexDir="column" gap={{ lg: "1", base: 0 }}>
						<Text fontWeight="bold" fontSize={{ lg: "4xl", base: "lg" }} textTransform={"capitalize"}>
							{user?.first_name} {user?.last_name}
						</Text>
						<Text fontWeight="light" fontSize={{ lg: "lg", base: "md" }} color="orange.400">
							Acheteur
						</Text>
					</Flex>

					<Flex flexDir="column" gap="1" mb="4">
						<Text fontWeight="bold" fontSize={{ lg: "lg", base: "md" }}>
							Flexibilité à l'achat
						</Text>
						<HStack spacing="2">
							<Text fontWeight="extrabold" fontSize="xl">
								10
							</Text>
							<Flex>
								{Array(5)
									.fill(null)
									.map((a, i) => {
										return <Image width={25} height={25} key={`star${i}`} src={StarActivate} />
									})}
							</Flex>
						</HStack>
					</Flex>
				</Flex>
			</Flex>
			<AccountCards />
		</Flex>
	)
}

export default Account
