import { Box, Flex, Image, Text } from "@chakra-ui/react"

import StepDecoration from "@assets/Restauration/step-decoration.png"

type Props = {
	title: string
	description: string
	image: string
	index: number
}

const Step = ({ title, description, image, index }: Props) => {
	return (
		<Box>
			<Flex flexDirection="column">
				<Text marginBottom={6} fontWeight={700}>
					Étape {index}
				</Text>
				<Flex marginBottom={10} justifyContent="space-between" gap={{ lg: "0", base: "8" }} flexDir={{ lg: "row", base: "column" }}>
					<Flex width={{ lg: "48%", base: "100%" }}>
						<Image src={image} objectFit="cover" />
					</Flex>
					<Flex
						borderRadius={8}
						width={{ lg: "48%", base: "100%" }}
						background="#F6F6F6"
						paddingX={6}
						paddingY={5}
						flexDirection="column"
						position="relative">
						<Image position="absolute" src={StepDecoration} objectFit="contain" width="80px" top={0} right={10} />
						<Text fontSize={20} fontWeight={900} marginBottom={5}>
							{title}
						</Text>
						<Text>{description}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Step
