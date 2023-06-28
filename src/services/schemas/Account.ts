import * as yup from "yup"

export type ProfileFormData = {
	email: string
	password: string
	confirmPassword: string
	phone: string
	city: string
	postalCode: string
	address: string
	country: string
}

export const profileSchema = yup.object({
	email: yup.string().email("Entrez un email valide.").required("Un email est requis."),
	// password: yup
	// 	.string()
	// 	.min(6, "Le mot de passe devrait avoir 6 caractères au minimum")
	// 	.when("$confirmPassword", {
	// 		is: (confirmPassword: string) => confirmPassword && confirmPassword.length > 0,
	// 		then: yup.string().required("Un mot de passe est requis"),
	// 		otherwise: yup.string().notRequired()
	// 	}),
	// confirmPassword: yup
	// 	.string()
	// 	.oneOf([yup.ref("password"), undefined], "Les mots de passe doivent correspondre.")
	// 	.when("$password", {
	// 		is: (password: string) => password && password.length > 0,
	// 		then: yup.string().required("Un mot de passe qui correspond est requis"),
	// 		otherwise: yup.string().notRequired()
	// 	}),
	phone: yup.string().required("Le numéro de téléphone est requis."),
	city: yup.string().required("La ville est requise."),
	postalCode: yup.string().required("Le code postal est requis."),
	address: yup.string().required("Une addresse est requise."),
	country: yup.string().required("Un pays est requis.")
})
