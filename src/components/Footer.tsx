import { Center, Image, Link as ChakraLink } from "@chakra-ui/react";
import Logo from "@assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import { links } from "@components/Navbar";

const Footer = () => {
	return (
		<Center background="gray.100" p="2rem" flexDir="column" gap="1rem">
			<Image src={Logo} w="200px" mb="3" />
			{links.map((link) => (
				<ChakraLink color="black" key={link.title} to={link.to} as={Link}>
					{link.title}
				</ChakraLink>
			))}
		</Center>
	);
};

export default Footer;
