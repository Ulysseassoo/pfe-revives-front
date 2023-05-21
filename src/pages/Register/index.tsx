import { Box, Flex, Image, Center } from "@chakra-ui/react";
import Background from "@assets/Register/background.jpg";
import RegisterForm from "@components/Register/RegisterForm";
import { useMediaQuery } from "@chakra-ui/react";
import AuthNextLink from "@components/AuthNextLink";

const Register = () => {
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");

	return (
		<Flex h="100vh" w="full" gap="2rem" position="relative">
			<Box py="4" px={"4"} position="absolute" top="0" right="10px">
				<AuthNextLink href="/login" text={"Vous avez déjà un compte ? "} linkName="Se connecter" />
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
