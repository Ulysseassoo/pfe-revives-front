import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"

import StarActivate from "@assets/Common/Illustration/star-activate.svg"
import StarDisable from "@assets/Common/Illustration/star-disable.svg"
import { ShoeInterface } from "@inteface/ShoeInterface"
import SizesForm from "./Form/SizesForm"

type Props = {
	shoe: ShoeInterface
}

const SneakerDetail = ({ shoe }: Props) => {
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)")

	return (
		<Flex flexDirection="column" marginY={10}>
			<Flex gap={isSmallerThan960 ? "16" : 0} flexDir={isSmallerThan960 ? "column" : "row"} justifyContent="space-between" marginBottom={5}>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column">
					<Image src={shoe.Photo[0].image_url} width="100%" objectFit="contain" background="#F6F6F6" marginBottom={15} />
					<Flex justifyContent="space-between">
						{shoe.Photo.slice(1, 4).map((photo) => {
							return <Image src={photo.image_url} key={photo.id} width="30%" height="150px" objectFit="contain" background="#F6F6F6" />
						})}
					</Flex>
				</Flex>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column" fontFamily="metropolis" gap={2}>
					<Text fontWeight={900} fontSize={25}>
						{shoe.model}
					</Text>

					<Flex>
						{Array(shoe.rate)
							.fill(null)
							.map((a, index) => {
								return <Image width={25} height={25} key={`star${index}`} src={StarActivate} />
							})}
						{Array(5 - shoe.rate)
							.fill(null)
							.map((a, index) => {
								return <Image width={25} height={25} key={`star${index}`} src={StarDisable} />
							})}
					</Flex>

					<Text fontWeight={900}>{shoe.price}€</Text>

					<SizesForm sizes={shoe.size} shoe={shoe} />
				</Flex>
			</Flex>
			<Flex flexDirection="column">
				<Text color="#D4AA7D" fontFamily="metropolis" fontWeight={900} fontSize={20}>
					Description
				</Text>
				<Text>{shoe.description}</Text>
			</Flex>
		</Flex>
	)
}

export default SneakerDetail
