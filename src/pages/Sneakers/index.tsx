import { Box, Image, Text, Flex, Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Checkbox } from "@chakra-ui/react"

import TitleWithLogoBackground from "@components/Common/TitleWithLogoBackground"
import ShoeListing from "@components/Sneakers/ShoeListing"
import SecondLife from "@components/Sneakers/SecondLife"
import SneakerCategory from "@components/Sneakers/SneakerCategory"
import FilterLogo from "@assets/Common/Illustration/filter-logo.svg"
import ArrowDown from "@assets/arrow-down.svg"

import SecondLifeImage from "@assets/Sneakers/second-life.png"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"
import Newsletter from "@components/Home/Newsletter"
import Footer from "@components/Footer"
import { useListShoesQuery } from "@store/api/Shoes"
import { useState } from "react"

const Sneakers = () => {
	const [selectedColor, setSelectedColor] = useState("")
	const { data, isFetching, isLoading } = useListShoesQuery({
		brand: "Jordan",
		take: "20",
		color: selectedColor !== "" ? selectedColor : undefined
	})

	const toggleColor = (color: string) => {
		if (selectedColor === color) {
			setSelectedColor("")
			return
		}
		setSelectedColor(color)
		return
	}

	return (
		<Box as="section">
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }}>
				<Box>
					<TitleWithLogoBackground title="NOS SNEAKERS PRÉFÉRÉES" subtitle="PRODUIT" />
					<Flex w="100%" justifyContent="flex-end" gap={10} marginBottom={10}>
						<Menu>
							<MenuButton as={Flex} background="transparent" cursor="pointer">
								<Flex gap={1} alignItems="center">
									<Text>Filtrer</Text>
									<Image src={FilterLogo} h="70%" />
								</Flex>
							</MenuButton>
							<MenuList>
								<MenuGroup title="Couleurs">
									<MenuItem>
										<Checkbox onChange={() => toggleColor("Black")} isChecked={selectedColor === "Black"}>
											Noir
										</Checkbox>
									</MenuItem>
									<MenuItem>
										<Checkbox onChange={() => toggleColor("White")} isChecked={selectedColor === "White"}>
											Blanche
										</Checkbox>{" "}
									</MenuItem>
								</MenuGroup>
							</MenuList>
						</Menu>
					</Flex>
					<ShoeListing isLoading={isFetching || isLoading} isFilter={false} shoes={data?.data} />
				</Box>
			</Box>
			<SecondLife
				title="Donner une seconde vie à vos sneaker !"
				description="Vous voulez porter vos anciennes sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau."
				image={SecondLifeImage}
			/>
			<Box paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} mt="8">
				<SneakerCategory title="Les mieux notés" nbrOfShoe={3} rate="5" price={95} />
				<SneakerCategory title="Les bons plans" nbrOfShoe={3} rate="5" price={85} />
			</Box>
			<Newsletter />
			<Footer />
		</Box>
	)
}

export default Sneakers
