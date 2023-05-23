import { Box, Button, Center, Divider, Flex, Heading, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Background from "@assets/Contact/background.jpg";
import ContactForm from "@components/Contact/ContactForm";
import MapAsset from "@assets/Contact/map.png";
import { PADDING_IPAD, PADDING_DESKTOP } from "@theme/theme";
import Footer from "@components/Footer";

const Contact = () => {
	const [isSmallerThan890] = useMediaQuery("(max-width: 890px)");
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

	return (
		<Flex gap="28" flexDir="column" as="section">
			<Center flexDir="column" gap="4" w="full" position="relative" overflow={"hidden"} h="50vh" mb="8">
				<Image
					zIndex={-1}
					src={Background}
					position="absolute"
					objectFit={"cover"}
					top="0"
					left="0"
					h="full"
					w="full"
				/>

				<Box zIndex={-1} position="absolute" top="0" left="0" h="full" w="full" background="#FBFBFB" opacity="0.7" />

				<Heading position="relative" zIndex={2} fontSize="5xl" as="h2">
					Contactez-nous
				</Heading>
				<Text position="relative" zIndex={2} fontSize="xl">
					Nous vous répondrons dans les plus brefs délais
				</Text>
			</Center>

			<Flex>
				<Box flex="70%" px={"32"}>
					<ContactForm />
				</Box>
				<Box flex="30%" display="flex" flexDir="column" gap="4" px={"32"}>
					<Box>
						<Text mb="2" fontWeight="semibold">
							Addresse
						</Text>
						<Box width="45px" h="1px" background="primary" />
					</Box>
					<VStack alignItems="flex-start" spacing="2">
						<Text color="gray.400" fontWeight="semibold">
							95 Avenue Parmentier
						</Text>
						<Text color="gray.400" fontWeight="semibold">
							Paris, Ile de France
						</Text>
						<Text color="gray.400" fontWeight="semibold">
							France, 75011
						</Text>
					</VStack>
				</Box>
			</Flex>

			<Box h="auto" w="full">
				<Image src={MapAsset} objectFit="contain" objectPosition={"center"} />
			</Box>

			<Box>
				<Box
					background="linear-gradient(90deg, rgba(236,212,186,1) 0%, rgba(235,206,175,0.7019140419839811) 100%)"
					height="50vh"
					position="relative"
					p="4"
					pt="8"
				>
					<Center
						paddingX={isSmallerThan600 ? "0.65rem" : isSmallerThan890 ? PADDING_IPAD : PADDING_DESKTOP}
						position="relative"
						zIndex={4}
					>
						<Center flexDir="column" gap="8" maxW="50%">
							<Heading fontSize="3xl" textAlign="center" as="h3">
								Créer votre compte maintenant !
							</Heading>
							<Text fontSize="lg" textAlign="center">
								Si vous souhaitez bénéficier des services de restauration de sneakers de qualité, vous pouvez vous
								inscrire à Revive's pour redonner vie à vos chaussures préférées.
							</Text>
							<Button
								background="primary"
								color="white"
								_hover={{
									background: "primaryHover",
								}}
								borderRadius="none"
								h="full"
								w="50%"
								p="4"
							>
								S&apos;inscrire
							</Button>
						</Center>
					</Center>
				</Box>

				<Footer />
			</Box>
		</Flex>
	);
};

export default Contact;
