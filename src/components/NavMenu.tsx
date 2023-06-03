import { Flex, HStack, Icon, Link as ChakraLink, Text, VStack, Center, Circle, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { links } from "./Navbar";
import { Link } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import NavAccount from "./NavAccount";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavMenu = ({ isOpen, onClose }: Props) => {
	const { products } = useAppSelector((state) => state.cart);
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<Box
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
				
				<NavAccount />
				<Flex gap="3" alignItems="center">
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
								transition: "0.3s ease all",
							}}
							transition="0.3s ease all"
							_hover={{
								_before: {
									background: "blackAlpha.200",
								},
							}}
							h="25px"
							w="25px"
						>
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
		</Box>
	);
};

export default NavMenu;
