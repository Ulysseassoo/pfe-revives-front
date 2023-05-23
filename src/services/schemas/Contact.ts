import * as yup from "yup";

export type FormData = {
	email: string;
	firstname: string;
	lastname: string;
	message: string;
};

export const schema = yup.object({
	firstname: yup.string().required("Un prénom est requis."),
	lastname: yup.string().required("Un nom est requis."),
	email: yup.string().email("Entrez un email valide.").required("Un email est requis."),
	message: yup.string().required("Un message est requis."),
});
