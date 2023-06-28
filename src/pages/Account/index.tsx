import { Avatar, Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import StarActivate from "@assets/Common/Illustration/star-activate.svg"
import React from "react"
import AccountCards from "@components/Account/AccountCards"
import AccountContainer from "@components/Account/AccountContainer"
import { RiLogoutBoxFill } from "react-icons/ri"
import { setToken, setUser } from "@store/reducers/Auth"
import { useNavigate, useNavigation } from "react-router-dom"
import { clearCart, setCart } from "@store/reducers/Cart"

const Account = () => {
	const { user } = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const Logout = () => {
		localStorage.removeItem("token")
		dispatch(setUser(null))
		dispatch(setToken(null))
		dispatch(clearCart())
		navigate("/")
	}

	return (
		<AccountContainer onClick={Logout} text="Logout" CustomIcon={RiLogoutBoxFill}>
			<Flex gap="6" mb="8">
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
		</AccountContainer>
	)
}

export default Account
