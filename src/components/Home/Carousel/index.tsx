import { Box, Center, Circle, Flex, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Slide from "@assets/Home/Slide.png";
import Slide2 from "@assets/Home/Slide2.jpg";
import Slide3 from "@assets/Home/Slide3.jpg";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import ShoeBox from "@components/Common/ShoeBox";
import { Swiper, SwiperEvents } from "swiper/types";
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

const Carousel = () => {
	const swiperElRef = useRef<{ swiper: Swiper } | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (swiperElRef.current !== null) {
			swiperElRef.current.swiper.on("slideChange", (e) => {
				setActiveIndex(e.activeIndex);
			});
		}
	}, []);

	return (
		<Flex as="section" position="relative" overflow="hidden">
			<Box
				// @ts-ignore
				as="swiper-container"
				ref={swiperElRef}
				slides-per-view="1"
				height="590px"
				w="full"
				position="relative"
				overflow="hidden"
			>
				{items.map((item) => (
					// @ts-ignore
					<Box as="swiper-slide" key={item.id}>
						<Box height="500px">
							<Image
								height="100%"
								width="100%"
								src={item.image}
								alt={item.alt}
								objectFit={"cover"}
								objectPosition={"center"}
							/>
						</Box>
					</Box>
				))}
			</Box>
			<Box bottom="3" position="absolute" w="full" p="2" zIndex="99">
				<Center gap="10px">
					{[0, 1, 2].map((_, i) => (
						<Circle
							id={`cicle${i}`}
							key={`cirlce${i}`}
							onClick={() => {
								if (swiperElRef.current !== null) {
									swiperElRef.current.swiper.slideTo(i);
									setActiveIndex(i);
								}
							}}
							bg={activeIndex === i ? "primary" : "#434343"}
							cursor="pointer"
							size="22.5px"
						/>
					))}
				</Center>
			</Box>
		</Flex>
	);
};

export default Carousel;
