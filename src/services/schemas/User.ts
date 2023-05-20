import * as yup from "yup";

export type RegisterFormData = {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export const registerSchema = yup.object({
	firstname: yup.string().required("Un prénom est requis."),
	lastname: yup.string().required("Un nom est requis."),
	email: yup.string().email("Entrez un email valide.").required("Un email est requis."),
	password: yup
		.string()
		.required("Un mot de passe est requis")
		.min(6, "Le mot de passe devrait avoir 6 caractères au minimum"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), undefined], "Les mots de passe doivent correspondre")
		.required("Un mot de passe qui correspond est requis"),
});
