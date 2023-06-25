import React from "react"
import AccountContainer from "@components/Account/AccountContainer"
import { useAppSelector } from "@store/hooks"
import { Flex, Center, Avatar, HStack, Text } from "@chakra-ui/react"
import ProfileForm from "@components/Account/ProfileForm"

const Profile = () => {
	const { isAuthenticated, user } = useAppSelector((state) => state.auth)

	return (
		<AccountContainer>
			<Flex gap="20" flexDir="column">
				<Flex gap="20">
					<Center background="gray.200" height={{ lg: "200px", base: "100px" }} width={{ lg: "200px", base: "100px" }} borderRadius="lg">
						<Avatar size={{ lg: "2xl", base: "lg" }} bg="primary" name={`${user?.first_name} ${user?.last_name}`} />
					</Center>
					<Center>
						<Flex flexDir="column" gap={{ lg: "1", base: 0 }}>
							<Text fontWeight="bold" fontSize={{ lg: "4xl", base: "lg" }} textTransform={"capitalize"}>
								{user?.first_name} {user?.last_name}
							</Text>
							<Text fontWeight="light" fontSize={{ lg: "lg", base: "md" }} color="orange.400">
								Acheteur
							</Text>
						</Flex>
					</Center>
				</Flex>

				<ProfileForm />
			</Flex>
		</AccountContainer>
	)
}

export default Profile
