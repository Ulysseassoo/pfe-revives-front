import React from "react";
import {
	Box,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Icon,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link as ChakraLink,
	Text,
	Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
	text: string;
	linkName: string;
	href: string;
}

const AuthNextLink = ({ text, linkName, href }: Props) => {
	return (
		<Text>
			{text}
			<ChakraLink as={Link} to={href} color="primary">
				{linkName}
			</ChakraLink>
		</Text>
	);
};

export default AuthNextLink;
