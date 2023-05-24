import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightAddon,
	useMediaQuery,
} from "@chakra-ui/react";
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme";
import CleanShoes from "@assets/Home/clean-shoes.png";
import React from "react";

const Newsletter = () => {
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)");
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

	return (
		<Box as="section">
			<Flex
				background="linear-gradient(90deg, rgba(236,212,186,1) 0%, rgba(235,206,175,0.7019140419839811) 100%)"
				height="40vh"
				position="relative"
				paddingX={isSmallerThan600 ? 8 : isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP}
			>
				<Center
					flexDir="column"
					gap="3rem"
					maxW={{ xl: "50%", lg: "70%", md: "full", sm: "full", base: "full" }}
					position="relative"
					zIndex={4}
				>
					<Heading fontSize={{ xl: "3xl", lg: "3xl", md: "2xl", sm: "xl", base: "xl" }} fontWeight={"semibold"}>
						Laissez-nous votre mail pour plus d&apos;informations !{" "}
					</Heading>
					<InputGroup size="xl">
						<Input
							background="white"
							borderRadius={"none"}
							boxShadow={"md"}
							focusBorderColor="primary"
							type={"text"}
							fontSize="md"
							py="4"
							pl="4"
							pr="4"
							_placeholder={{
								color: "#B1B1B1",
							}}
							placeholder="Ecrivez votre mail..."
						/>
						<InputRightAddon>
							<Button
								background="primary"
								color="white"
								_hover={{
									background: "primaryHover",
								}}
								borderRadius="none"
								h="full"
								w="full"
								p="4"
							>
								Envoyer
							</Button>
						</InputRightAddon>
					</InputGroup>
				</Center>
				<Image
					position="absolute"
					w={isSmallerThan890 ? "250px" : "400px"}
					src={CleanShoes}
					alt="Clean shoes"
					bottom="0"
					right="0"
				/>
			</Flex>
		</Box>
	);
};

export default Newsletter;
