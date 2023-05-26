import { Flex, useMediaQuery, Skeleton, SkeletonText } from "@chakra-ui/react";

const SneakerDetailSkeleton = () => {
	const emptyArray = Array.from({ length: 3 });
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");
	return (
		<Flex flexDirection="column" marginY={10}>
			<Flex
				gap={isSmallerThan960 ? "16" : 0}
				flexDir={isSmallerThan960 ? "column" : "row"}
				justifyContent="space-between"
				marginBottom={5}
			>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column">
					<Skeleton h="60vh" width="100%" background="#F6F6F6" marginBottom={15} />
					<Flex justifyContent="space-between">
						{emptyArray.map((_, index) => {
							return <Skeleton key={`skeleton${index}`} width="30%" height="150px" background="#F6F6F6" />;
						})}
					</Flex>
				</Flex>
				<Flex width={isSmallerThan960 ? "full" : "48%"} flexDirection="column" fontFamily="metropolis" gap={2}>
					<SkeletonText mt="4" noOfLines={10} spacing="4" skeletonHeight="2" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SneakerDetailSkeleton;
