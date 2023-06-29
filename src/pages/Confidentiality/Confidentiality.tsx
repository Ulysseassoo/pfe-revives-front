import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme"
import React from "react"

const Confidentiality = () => {
	return (
		<Stack spacing="3" paddingX={{ lg: PADDING_DESKTOP, base: PADDING_IPAD }} paddingY={4}>
			<Heading>Politique de confidentialité de Revive's</Heading>

			<Flex gap="4" flexDir="column">
				<Text>
					Chez Revive's, nous accordons une grande importance à la confidentialité et à la protection des données personnelles de nos utilisateurs.
					Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons les informations que vous nous
					fournissez lorsque vous utilisez notre site web et nos services.
				</Text>
				<Text>
					Veuillez lire attentivement cette politique pour comprendre notre approche en matière de confidentialité et comment nous traitons vos
					données personnelles. Collecte des informations : Nous collectons les informations personnelles que vous nous fournissez directement lorsque
					vous utilisez notre site web et nos services, notamment lors de la création d'un compte, de l'achat de produits, de la demande de services
					de reconditionnement ou de la communication avec notre équipe d'assistance. Les informations que nous pouvons collecter comprennent, sans
					s'y limiter : Vos coordonnées personnelles telles que votre nom, adresse e-mail, adresse de livraison, numéro de téléphone, etc.
				</Text>
				<Text>
					{" "}
					Les informations de paiement nécessaires pour traiter vos commandes, telles que les détails de la carte de crédit ou les informations de
					paiement en ligne. Les préférences de communication et les choix marketing que vous exprimez. Utilisation des informations : Nous utilisons
					les informations personnelles que nous collectons pour les finalités suivantes : Fournir et gérer les services que vous demandez, tels que
					le traitement des commandes, la livraison des produits et la fourniture de services de reconditionnement. Communiquer avec vous concernant
					votre compte, vos achats, vos demandes de service et vous envoyer des notifications importantes liées à nos services.
				</Text>
				<Text>
					{" "}
					Personnaliser et améliorer votre expérience sur notre site web, en vous proposant des produits, des offres et des contenus adaptés à vos
					intérêts. Analyser et comprendre l'utilisation de notre site web, afin d'améliorer nos produits, services et fonctionnalités. Fournir un
					support client et répondre à vos demandes d'assistance. Respecter nos obligations légales et réglementaires. Divulgation des informations :
					Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing sans votre consentement
					explicite. Cependant, nous pouvons partager vos informations personnelles dans les cas suivants : Avec des fournisseurs de services tiers
					qui nous aident à exploiter notre site web et à fournir nos services, tels que les services de paiement, les services de livraison, les
					services d'hébergement, etc.
				</Text>
				<Text>
					{" "}
					Ces fournisseurs de services sont liés par des obligations de confidentialité et ne sont autorisés à utiliser vos informations que dans la
					mesure nécessaire pour fournir les services demandés. Dans le cadre d'une transaction commerciale, telle qu'une fusion, une acquisition, une
					vente d'actifs ou une restructuration de notre entreprise, où vos informations personnelles peuvent être transférées en tant qu'actif de
					l'entreprise. Sécurité des informations : Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations
					personnelles contre tout accès non autorisé, utilisation abusive, divulgation ou destruction. Cela comprend des protocoles de sécurité
					techniques et organisationnels tels que le chiffrement des données, des contrôles d'accès stricts, la formation de notre personnel et des
					audits réguliers. Vos droits : Vous avez certains droits concernant vos informations personnelles, notamment le droit d'accéder, de
					rectifier, de mettre à jour ou de supprimer vos données. Vous avez également le droit de vous opposer au traitement de vos données
					personnelles à des fins de marketing direct. Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée dans la section "Nous
					contacter" ci-dessous.
				</Text>
				<Text>
					Cookies et technologies similaires : Nous utilisons des cookies et des technologies similaires pour collecter des informations sur votre
					utilisation de notre site web et personnaliser votre expérience. Vous pouvez gérer vos préférences en matière de cookies en ajustant les
					paramètres de votre navigateur. Modifications de la politique de confidentialité : Nous nous réservons le droit de mettre à jour cette
					politique de confidentialité à tout moment. Toute modification sera publiée sur notre site web avec la date d'entrée en vigueur. Nous vous
					encourageons à consulter régulièrement cette politique pour vous tenir informé de nos pratiques en matière de confidentialité.
				</Text>
				<Text>
					Nous contacter : Si vous avez des questions, des préoccupations ou des demandes concernant notre politique de confidentialité ou nos
					pratiques en matière de traitement des données, veuillez nous contacter à l'adresse suivante : revives@client.com .
				</Text>
				<br />
				Cette politique de confidentialité est en vigueur à partir de 29/06/2023.
			</Flex>
		</Stack>
	)
}

export default Confidentiality
