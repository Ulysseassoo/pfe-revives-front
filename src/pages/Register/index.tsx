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
import React from "react";
import { PADDING_DESKTOP } from "../../theme";
import Logo from "@assets/logo.svg";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Background from "@assets/Register/background.jpg";
import RegisterForm from "@components/Register/RegisterForm";
import { useMediaQuery } from "@chakra-ui/react";

const Register = () => {
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");

	return (
		<Flex h="100vh" w="full" gap="2rem" position="relative">
			<Box py="4" px={"4"} position="absolute" top="0" right="10px">
				<Text>
					Vous avez déjà un compte ?{" "}
					<ChakraLink as={Link} to="/login" color="primary">
						Se connecter
					</ChakraLink>
				</Text>
			</Box>

			{!isSmallerThan980 ? (
				<Box w="50%" overflow="hidden">
					<Image w="full" height="full" objectFit="cover" objectPosition={"center"} src={Background} />
				</Box>
			) : null}

			<Center w={isSmallerThan980 ? "full" : "50%"} py="4" px={"4"} flexDir="column" gap="8">
				<RegisterForm />
			</Center>
		</Flex>
	);
};

export default Register;
