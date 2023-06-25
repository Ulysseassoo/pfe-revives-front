import LogoImage from "@assets/logo.svg"
import React from "react"
import { Link } from "react-router-dom"
import { links } from "@components/Navbar"
import { Box, Container, Link as ChakraLink, SimpleGrid, Stack, Text, Flex, Tag, useColorModeValue, Image } from "@chakra-ui/react"
import { ReactNode } from "react"

const Logo = (props: any) => {
	return <Image src={LogoImage} height="32px" />
}

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	)
}

export default function Footer() {
	return (
		<Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					<Stack align={"flex-start"}>
						<ListHeader>Liens</ListHeader>
						{links.map((link) => (
							<ChakraLink as={Link} to={link.to} key={link.title}>
								{link.title}
							</ChakraLink>
						))}
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Entreprise</ListHeader>
						<ChakraLink as={Link} to={'/faq'}>
							A propos de nous
						</ChakraLink>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Légal</ListHeader>
						<ChakraLink as={Link} href={"#"}>
							Politique des cookies
						</ChakraLink>
						<ChakraLink as={Link} href={"#"}>
							Politique de confidentialité
						</ChakraLink>
						<ChakraLink as={Link} href={"#"}>
							Termes de services
						</ChakraLink>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Suivez Nous</ListHeader>
						<ChakraLink as={Link} href={"#"}>
							Facebook
						</ChakraLink>
						<ChakraLink as={Link} href={"#"}>
							Twitter
						</ChakraLink>
						<ChakraLink as={Link} href={"#"}>
							Instagram
						</ChakraLink>
					</Stack>
				</SimpleGrid>
			</Container>
			<Box py={10}>
				<Flex
					align={"center"}
					_before={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						mr: 8
					}}
					_after={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						ml: 8
					}}>
					<Logo />
				</Flex>
				<Text pt={6} fontSize={"sm"} textAlign={"center"}>
					© 2022 Revives. All rights reserved
				</Text>
			</Box>
		</Box>
	)
}
