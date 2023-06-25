import * as yup from "yup"

export type ProfileFormData = {
	email: string
	password: string
	confirmPassword: string
	phone: string
	city: string
	postalCode: string
	address: string
}

export const profileSchema = yup.object({
	email: yup.string().email("Entrez un email valide.").required("Un email est requis."),
	password: yup.string().required("Un mot de passe est requis").min(6, "Le mot de passe devrait avoir 6 caractères au minimum"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), undefined], "Les mots de passe doivent correspondre.")
		.required("Un mot de passe qui correspond est requis."),
	phone: yup.string().required("Le numéro de téléphone est requis."),
	city: yup.string().required("La ville est requise."),
	postalCode: yup.string().required("Le code postal est requis."),
	address: yup.string().required("Une addresse est requise.")
})
