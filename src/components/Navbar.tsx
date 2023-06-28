import { Box, Center, Flex, Icon, Image, Input, Text, useDisclosure, useMediaQuery, Link as ChakraLink, Circle } from "@chakra-ui/react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { PADDING_DESKTOP, PADDING_IPAD } from "../theme/theme"
import Logo from "../assets/logo.svg"
import ArrowDown from "../assets/arrow-down.svg"
import SearchButton from "../assets/search.svg"
import { AiOutlineMenu } from "react-icons/ai"
import NavMenu from "./NavMenu"
import { useAppSelector } from "@store/hooks"
import { BsBag, BsHeart } from "react-icons/bs"
import NavAccount from "./NavAccount"
import Searchbar from "./Searchbar"

export const links = [
	{
		title: "Accueil",
		to: "/"
	},
	{
		title: "Nos sneakers",
		to: "/sneakers"
	},
	{
		title: "Revive's \n c'est quoi ?",
		to: "/about"
	},
	{
		title: "Restauration de chaussure",
		to: "/restauration"
	},
	{
		title: "Simulation",
		to: "/simulator"
	},
	{
		title: "Contactez-nous",
		to: "/contact"
	}
]

const Navbar = () => {
	const { products } = useAppSelector((state) => state.cart)
	const { isAuthenticated } = useAppSelector((state) => state.auth)
	const favorites = useAppSelector((state) => state.favorites)
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)")
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)")
	const { isOpen, onOpen, onClose } = useDisclosure()
	const handleClose = () => {
		document.body.style.overflow = "initial"
		onClose()
	}

	const navigate = useNavigate();

	if (isSmallerThan960) {
		return (
			<Box as="nav">
				<Flex w="full" py="4" px={PADDING_IPAD} justifyContent={"space-between"} alignItems="center" gap="20px">
					<Icon
						as={AiOutlineMenu}
						onClick={() => {
							document.body.style.overflow = "hidden"
							onOpen()
						}}
						boxSize={6}
						color="black"
						cursor={"pointer"}
					/>
					<Flex
						onClick={() => {
							navigate('/')
						}}
					>

						<Image 
							src={Logo} 
							w={"125px"} 
							/>
					</Flex>

					<Flex gap="6">
						<NavAccount />
						<ChakraLink as={Link} justifyContent="center" alignItems="center" display="flex" to="/cart">
							<Center
								position="relative"
								_before={{
									content: `""`,
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									width: "full",
									height: "full",
									borderRadius: "full",
									background: "transparent",
									zIndex: -1,
									transition: "0.3s ease all"
								}}
								transition="0.3s ease all"
								_hover={{
									_before: {
										background: "blackAlpha.200"
									}
								}}
								h="25px"
								w="25px">
								<Circle
									size="2"
									zIndex="4"
									background="primary"
									position="absolute"
									top="1.5"
									right="1"
									transition="0.2s ease all"
									opacity={products.length > 0 ? 1 : 0}
									visibility={products.length > 0 ? "visible" : "hidden"}
								/>
								<Icon position="relative" as={BsBag} boxSize={4} />
							</Center>
						</ChakraLink>
					</Flex>
				</Flex>
				<Searchbar />
				<NavMenu onClose={handleClose} isOpen={isOpen} />
			</Box>
		)
	}

	return (
		<Box as="nav">
			<Flex w="full" py="4" px={PADDING_DESKTOP} justifyContent={"space-between"} alignItems="center" gap="50px">
				<Flex
					onClick={() => {
						navigate('/')
					}}
				>
					<Image src={Logo} w={"200px"} />
				</Flex>
				<Searchbar />
				<Flex gap="4" alignItems={"center"}>
					<NavAccount />
					<ChakraLink as={Link} justifyContent="center" alignItems="center" display="flex" to="/cart">
						<Center
							position="relative"
							_before={{
								content: `""`,
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								width: "full",
								height: "full",
								borderRadius: "full",
								background: "transparent",
								zIndex: -1,
								transition: "0.3s ease all"
							}}
							transition="0.3s ease all"
							_hover={{
								_before: {
									background: "blackAlpha.200"
								}
							}}
							h="30px"
							w="30px">
							<Circle
								size="2"
								zIndex="4"
								background="primary"
								position="absolute"
								top="1.5"
								right="1"
								transition="0.2s ease all"
								opacity={products.length > 0 ? 1 : 0}
								visibility={products.length > 0 ? "visible" : "hidden"}
							/>
							<Icon position="relative" as={BsBag} boxSize={4} />
						</Center>
					</ChakraLink>
					{isAuthenticated ? (
						<ChakraLink as={Link} justifyContent="center" alignItems="center" display="flex" to="/favorites">
							<Center
								position="relative"
								_before={{
									content: `""`,
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									width: "full",
									height: "full",
									borderRadius: "full",
									background: "transparent",
									zIndex: -1,
									transition: "0.3s ease all"
								}}
								transition="0.3s ease all"
								_hover={{
									_before: {
										background: "blackAlpha.200"
									}
								}}
								h="30px"
								w="30px">
								<Circle
									size="2"
									zIndex="4"
									background="primary"
									position="absolute"
									top="1.5"
									right="1"
									transition="0.2s ease all"
									opacity={favorites.length > 0 ? 1 : 0}
									visibility={favorites.length > 0 ? "visible" : "hidden"}
								/>
								<Icon as={BsHeart} boxSize={4} />
							</Center>
						</ChakraLink>
					) : null}
				</Flex>
			</Flex>
			<Center gap="50" p="5" borderTop="1px solid #E3E3E3">
				{links.map((link) => (
					<NavLink key={link.title} to={link.to}>
						{({ isActive }) => <Text color={isActive ? "primary" : "black"}>{link.title}</Text>}
					</NavLink>
				))}
			</Center>
		</Box>
	)
}

export default Navbar
