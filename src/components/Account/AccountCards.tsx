import { Grid } from "@chakra-ui/react"
import React from "react"
import AccountCard from "./AccountCard"
import { GrCircleInformation, GrShieldSecurity } from "react-icons/gr"
import { FiShoppingBag } from "react-icons/fi"
import { VscAccount } from "react-icons/vsc"
import { BiCog } from "react-icons/bi"

const AccountCards = () => {
	return (
		<Grid
			gap="16"
			gridTemplateColumns={{
				lg: "repeat(3,minmax(0,1fr))",
				md: "repeat(2,minmax(0,1fr))",
				sm: "repeat(1,minmax(0,1fr))"
			}}
			as="section">
			<AccountCard
				position={{
					left: "-55%",
					top: "-35%"
				}}
				to="money"
				title="Porte-monnaie"
				subtitle="Solde disponible"
			/>
			<AccountCard
				position={{
					left: "85%",
					top: "-35%"
				}}
				to="purchases"
				title="Mes achats"
				subtitle="Gérer mes achats effectués"
				IconItem={GrCircleInformation}
			/>
			<AccountCard
				position={{
					left: "45%",
					top: "-95%"
				}}
				to="orders"
				title="Commandes"
				subtitle="Suivre mes commandes effectués"
				IconItem={FiShoppingBag}
			/>

			<AccountCard
				position={{
					left: "65%",
					top: "-70%"
				}}
				to="profile"
				title="Profil"
				subtitle="Modifier mon profil public"
				IconItem={VscAccount}
			/>

			<AccountCard
				position={{
					left: "-55%",
					top: "0%"
				}}
				to="parameters"
				title="Paramètres"
				subtitle="Compléter et modifier mes informations privées"
				IconItem={BiCog}
			/>

			<AccountCard
				position={{
					left: "40%",
					top: "-105%"
				}}
				to="security"
				title="Connexion et sécurité"
				subtitle="Protéger mon compte et consulter son indice de sécurité"
				IconItem={GrShieldSecurity}
			/>
		</Grid>
	)
}

export default AccountCards
