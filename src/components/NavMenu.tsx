import { Flex, HStack, Icon, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { links } from "./Navbar";
import { Link } from "react-router-dom";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavMenu = ({ isOpen, onClose }: Props) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<VStack
			visibility={isOpen ? "visible" : "hidden"}
			position="absolute"
			top="0"
			left={isOpen ? "0" : "-100%"}
			height="100vh"
			zIndex="20000"
			background="white"
			w="full"
			transition="0.5s all ease-in-out"
		>
			<Flex
				p="4"
				w="full"
				justifyContent={"space-between"}
				alignItems="center"
				borderBottom="1px solid transparent"
				borderColor="#E3E3E3"
			>
				<ChakraLink
					as={Link}
					style={{
						textDecoration: "none",
					}}
					to="/login"
					display="flex"
					alignItems="center"
					gap="2"
				>
					<Icon as={RiAccountPinCircleLine} cursor={"pointer"} boxSize={5} />
					<Text fontSize="md">Se connecter</Text>
				</ChakraLink>
				<Flex gap="3" alignItems="center">
					<ChakraLink
						as={Link}
						style={{
							textDecoration: "none",
						}}
						to="/cart"
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Icon as={BsBag} boxSize={4} color="black" cursor={"pointer"} />
					</ChakraLink>
					<Icon as={AiOutlineClose} onClick={onClose} boxSize={5} color="black" cursor={"pointer"} />
				</Flex>
			</Flex>

			<Flex
				as="nav"
				gap="1"
				flexDir="column"
				p="4"
				px="5"
				transition="0.4s all ease-in-out 0.6s"
				opacity={isOpen ? "1" : "0"}
				onTouchStart={handleMouseEnter}
				onTouchEnd={handleMouseLeave}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				textDecoration={"none"}
				borderBottom="1px solid transparent"
				borderColor="#E3E3E3"
			>
				{links.map((link) => (
					<ChakraLink
						as={Link}
						key={link.title}
						to={link.to}
						transition="0.3s all ease-in-out"
						style={{
							textDecoration: "none",
						}}
						onClick={onClose}
					>
						<Text
							fontFamily={"heading"}
							_hover={{
								opacity: 1,
							}}
							opacity={isHover ? 0.5 : 1}
							fontSize="2xl"
							textTransform={"uppercase"}
							fontWeight="bold"
							color="black"
							transition="0.3s all ease-in-out"
						>
							{link.title}
						</Text>
					</ChakraLink>
				))}
			</Flex>

			<Flex
				as="nav"
				gap="1"
				flexDir="column"
				p="4"
				px="5"
				transition="0.4s all ease-in-out 0.7s"
				opacity={isOpen ? "1" : "0"}
				w="full"
			>
				<Text fontSize="lg" fontFamily="heading" fontWeight="bold">
					Besoin d'aide ?
				</Text>
				<Text fontSize="lg" fontFamily="heading" fontWeight="bold">
					- Vérifier le statut d'une commande
				</Text>
				<Text fontSize="lg" fontFamily="heading" fontWeight="bold">
					- Commandes/Retours
				</Text>
			</Flex>
		</VStack>
	);
};

export default NavMenu;