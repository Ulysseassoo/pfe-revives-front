import { Flex, Input, Box, Image, Text, useMediaQuery, List, ListItem, Spinner, Center } from "@chakra-ui/react"
import ArrowDown from "@assets/arrow-down.svg"
import SearchButton from "@assets/search.svg"
import { useEffect, useState } from "react"
import useDebounce from "@hooks/useDebounce"
import { ShoeInterface } from "@inteface/ShoeInterface"
import { searchShoes } from "@services/Api/Shoe"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import { PADDING_IPAD } from "@theme/theme"

const Searchbar = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [searchText, setSearchText] = useState("")
	const [shoes, setShoes] = useState<ShoeInterface[]>([])
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)")
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)")
	const debouncedValue = useDebounce<string>(searchText, 500)
	const navigate = useNavigate()

	const handleInputText = async (textValue: string) => {
		setSearchText(textValue)
		setIsLoading(true)
	}

	const fetchShoes = async () => {
		if (debouncedValue === "") {
			setShoes([])
			setIsLoading(false)
			return
		}
		try {
			const res = await searchShoes(debouncedValue)
			setShoes(res)
			setIsLoading(false)
		} catch (error: any) {
			console.log(error)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchShoes()
	}, [debouncedValue])

	const goToShoe = (model: string) => {
		setShoes([])
		setIsLoading(false)
		setSearchText("")
		navigate(`/sneakers/${model}`)
	}

	return (
		<Box
			background={{ lg: "#F8F8F8", base: "white" }}
			w={{ lg: "initial", base: "full" }}
			borderRadius="full"
			h="full"
			position="relative"
			px={{ lg: 0, base: PADDING_IPAD }}
			py={{ lg: 0, base: 2 }}>
			<Flex w="full" px={{ lg: "5", base: 0 }} py="1" alignItems="center" gap="10px" position="relative" zIndex="11">
				<Flex gap="2px" alignItems="center">
					<Text fontSize={isSmallerThan600 ? "xs" : "initial"} fontWeight={"semibold"}>
						Toutes les catégories
					</Text>
					<Image src={ArrowDown} />
				</Flex>
				<Box as="span" h="24px" w="1px" background={"#838383"} />
				<Input
					onChange={(e) => handleInputText(e.target.value)}
					value={searchText}
					w="56"
					flex={{ lg: "initial", base: 1 }}
					fontSize={isSmallerThan600 ? "xs" : "initial"}
					variant="unstyled"
					placeholder="Rechercher un produit..."
				/>
				{isLoading ? (
					<Center background="primary" h="30px" w="30px" borderRadius={"full"}>
						<Spinner size="sm" color="black" />
					</Center>
				) : (
					<Image cursor={"pointer"} src={SearchButton} w="30px" />
				)}
			</Flex>
			{shoes.length > 0 && (
				<List
					background={{ lg: "#F8F8F8", base: "white" }}
					p="4"
					borderBottomRadius={"xl"}
					width="full"
					zIndex="10"
					position="absolute"
					top="25px"
					left="0">
					{shoes.map((shoe) => (
						<ListItem
							_hover={{
								background: "gray.200"
							}}
							py="2"
							px="2"
							borderRadius="xl"
							cursor="pointer"
							onClick={() => goToShoe(shoe.model)}>
							{shoe.model}
						</ListItem>
					))}
				</List>
			)}
		</Box>
	)
}

export default Searchbar
