import { Box, Center, Circle, Flex, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Slide from "@assets/Home/Slide.png";
import Slide2 from "@assets/Home/Slide2.jpg";
import Slide3 from "@assets/Home/Slide3.jpg";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
const items = [
	{
		image: Slide,
		alt: "Revive's first slide",
		id: 1,
	},
	{
		image: Slide2,
		alt: "Revive's second slide",
		id: 2,
	},
	{
		image: Slide3,
		alt: "Revive's third slide",
		id: 3,
	},
];

const slideVariants = {
	enter: { x: "100%" },
	center: { x: 0 },
	exit: { x: "-100%" },
};

const Carousel = () => {
	const [slidePage, setSlidePage] = useState<number>(0);
	const actualSlide = items[slidePage];

	const ChakraImage = chakra(motion.img, {
		/**
		 * Allow motion props and non-Chakra props to be forwarded.
		 */
		shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
	});

	// const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// useEffect(() => {
	// 	intervalRef.current = setInterval(() => {
	// 		setSlidePage((prevSlidePage) => (prevSlidePage + 1) % items.length);
	// 	}, 3000);

	// 	return () => {
	// 		if (intervalRef.current) {
	// 			clearInterval(intervalRef.current);
	// 		}
	// 	};
	// }, [items.length]);

	return (
		<Flex position="relative">
			<Box height="595px" w="full" position="relative" overflow="hidden">
				<AnimatePresence>
					<ChakraImage
						w='full'
						h="full"
						alt={actualSlide.alt}
						src={actualSlide.image}
						key={actualSlide.id}
						objectFit='cover'
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						// @ts-ignore
						transition={{ duration: 1.25 }}
						position="absolute"
						top="0"
						left="0"
					/>
				</AnimatePresence>
			</Box>
			<Box bottom="3" position="absolute" w="full" p="2">
				<Center gap="10px">
					{[0, 1, 2].map((_, i) => (
						<Circle
							key={`cirlce${i}`}
							onClick={() => setSlidePage(i)}
							bg={actualSlide.id === i + 1 ? "primary" : "#434343"}
							cursor="pointer"
							size='22.5px'
						/>
					))}
				</Center>
			</Box>
		</Flex>
	);
};

export default Carousel;
