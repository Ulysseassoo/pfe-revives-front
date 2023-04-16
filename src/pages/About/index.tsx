import React from "react";
import { Box, Center, Flex, Image, Input, Text } from "@chakra-ui/react";

import BackgroundImage from './../../assets/About/page-background.png'
import ReviveLogo from './../../assets/About/revive-logo.png'
import ReviveTitleBackground from './../../assets/About/revive-title-background.png'
import ReviveAboutPartBackground from './../../assets/About/revive-about-part1-background.png'
import ReviveAboutWhoBackground from './../../assets/About/revive-about-who-background.png'

const About = () => {
	return (
		<Box>
			<Flex position='relative'>
				<Image 
					w='100%'
					src={BackgroundImage} 
					objectFit='contain'
				/>
				<Box
					position='absolute' 
					w='50%'    
					left="50%"
					top="50%"
					transform="translate(-50%, -50%)" 
				>
					<Image 
						src={ReviveLogo} 
						objectFit='contain'
					/>
					<Text
						textAlign='center'
						color='white'
						marginTop='2'
					>
						Et son histoire
					</Text>
				</Box>
			</Flex>

			<Flex 
				position='relative' 
				marginY={25}
			>
				<Image 
					src={ReviveTitleBackground} 
					paddingX={50}
					paddingY={5}
				/>
				<Box 
					position='absolute'
					left="50%"
					top="50%"
					transform="translate(-50%, -50%)" 
					textAlign='center'
				>
					<Text
						color='#000000'
						fontSize={50}
						fontWeight='900'
						fontFamily='Metropolis'
					>
						QUI SOMMES NOUS ?
					</Text>
					<Text
						color='#D4AA7D'
						fontSize={35}
						fontWeight='900'
						fontFamily='Metropolis'
					>
						DÉBUT
					</Text>
				</Box>
			</Flex>

			<Flex
				justifyContent='center'
			>
				<Image
					src={ReviveAboutPartBackground}
					paddingX={19}
					marginY={20}
				/>
			</Flex>

			<Flex 
				marginY={20}  
				paddingX={20}
				gap={20}
				justifyContent='space-between'
			>
				<Box
					w='40%'
				>
					<Text
						fontWeight='bold'
						fontSize={30}
						marginBottom={15}
					>
						Mais qui est Revive'S ?
					</Text>
					<Text>
						Aujourd’hui, la mode est une des industries la plus polluante dans le monde. Chaque année en France, plus de 415 millions de paires de chaussures sont achetées, soit plus de 13 paires de chaussures chaque seconde, ou 243 000 tonnes de chaussures par an !
						En France, plus de 24 millions de paires de chaussures sont produites.
						Cette consommations peut avoir des conséquences désastreuses pour la planète et l’environnement.
						Notre but ? Allonger la durée de vie des sneakers présentes sur le marché pour lutter contre la surconsommation et la pollution et ainsi permettre à tout le monde d’acheter des sneakers d’occasion à prix abordables !
					</Text>
				</Box>
				<Box
					w='50%'
					objectFit='contain'
				>
					<Image src={ReviveAboutWhoBackground} />
				</Box>
			</Flex>
		</Box>
	);
};

export default About;
