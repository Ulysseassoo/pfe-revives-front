import { Box, Center, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PADDING_DESKTOP } from "../theme/theme";
import Logo from "../assets/logo.svg";
import ArrowDown from "../assets/arrow-down.svg";
import SearchButton from "../assets/search.svg";
import Account from "../assets/account.svg";
import Cart from "../assets/handbag-line.svg";
import Favorite from "../assets/heart-line.svg";

const links = [
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
	const navigate = useNavigate();

	return (
		<Box as="nav">
			<Flex w="full" py="4" px={PADDING_DESKTOP} justifyContent={"space-between"} alignItems="center" gap="50px">
				<Image src={Logo} w="200px" />
				<Box background="#F8F8F8" borderRadius="full" h="full">
					<Flex w="full" px="5" py="1" alignItems="center" gap="10px">
						<Flex gap="2px">
							<Text fontWeight={"semibold"}>Toutes les catégories</Text>
							<Image src={ArrowDown} />
						</Flex>
						<Box as="span" h="24px" w="1px" background={"#838383"} />
						<Input w="56" variant="unstyled" placeholder="Rechercher un produit..." />
						<Image src={SearchButton} w="30px" />
					</Flex>
				</Box>
				<Flex gap="10">
					<Image cursor={"pointer"} onClick={() => navigate("/register")} src={Account} w="20px" />
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
