import { Avatar, Box, Center, Flex, Icon, Image, Input, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PADDING_DESKTOP, PADDING_IPAD } from "../theme/theme";
import Logo from "../assets/logo.svg";
import ArrowDown from "../assets/arrow-down.svg";
import SearchButton from "../assets/search.svg";
import Account from "../assets/account.svg";
import Cart from "../assets/handbag-line.svg";
import Favorite from "../assets/heart-line.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useAuthStore from "@store/Auth";
import NavMenu from "./NavMenu";

export const links = [
	{
		title: "Accueil",
		to: "/",
	},
	{
		title: "Nos sneakers",
		to: "/sneakers",
	},
	{
		title: "Revive's \n c'est quoi ?",
		to: "/about",
	},
	{
		title: "Restauration de chaussure",
		to: "/restauration",
	},
	{
		title: "Contactez-nous",
		to: "/contact",
	},
];

const Navbar = () => {
	const { isAuthenticated, user } = useAuthStore();
	const navigate = useNavigate();
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleClose = () => {
		document.body.style.overflow = "initial";
		onClose();
	};

	const NavAccount = () => {
		if (isAuthenticated) {
			return (
				<Link to="/account">
					<Avatar size="xs" bg="primary" name={`${user?.first_name} ${user?.last_name}`} cursor={"pointer"} />
				</Link>
			);
		}

		return <Image cursor={"pointer"} onClick={() => navigate("/register")} src={Account} w="20px" />;
	};

	const searchBar = () => {
		return (
			<Box background="#F8F8F8" w={isSmallerThan960 ? "full" : "initial"} borderRadius="full" h="full">
				<Flex w="full" px="5" py="1" alignItems="center" gap="10px">
					<Flex gap="2px">
						<Text fontWeight={"semibold"}>Toutes les catégories</Text>
						<Image src={ArrowDown} />
					</Flex>
					<Box as="span" h="24px" w="1px" background={"#838383"} />
					<Input w="56" variant="unstyled" placeholder="Rechercher un produit..." />
					<Image cursor={"pointer"} src={SearchButton} w="30px" />
				</Flex>
			</Box>
		);
	};

	if (isSmallerThan960) {
		return (
			<Box as="nav">
				<Flex w="full" py="4" px={PADDING_IPAD} justifyContent={"space-between"} alignItems="center" gap="20px">
					<Icon
						as={AiOutlineMenu}
						onClick={() => {
							document.body.style.overflow = "hidden";
							onOpen();
						}}
						boxSize={6}
						color="black"
						cursor={"pointer"}
					/>
					<Image src={Logo} w={"125px"} />

					<Flex gap="6">
						{NavAccount()}
						<Image src={Cart} w="20px" />
					</Flex>
				</Flex>
				<Box py="2" px={PADDING_IPAD} background="white" w={"full"} borderRadius="full" h="full">
					<Flex w="full" py="1" alignItems="center" gap="10px">
						<Flex gap="2px" alignItems="center">
							<Text fontSize={isSmallerThan600 ? "xs" : "initial"} fontWeight={"semibold"}>
								Toutes les catégories
							</Text>
							<Image src={ArrowDown} />
						</Flex>
						<Box as="span" h="24px" w="1px" background={"#838383"} />
						<Input
							fontSize={isSmallerThan600 ? "xs" : "initial"}
							w="56"
							flex="1"
							variant="unstyled"
							placeholder="Rechercher un produit..."
						/>
						<Image cursor={"pointer"} src={SearchButton} w="30px" />
					</Flex>
				</Box>
				<NavMenu onClose={handleClose} isOpen={isOpen} />
			</Box>
		);
	}

	return (
		<Box as="nav">
			<Flex w="full" py="4" px={PADDING_DESKTOP} justifyContent={"space-between"} alignItems="center" gap="50px">
				<Image src={Logo} w={"200px"} />
				{searchBar()}
				<Flex gap="10">
					{NavAccount()}
					<Image src={Cart} w="20px" />
					<Image src={Favorite} w="20px" />
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
	);
};

export default Navbar;
