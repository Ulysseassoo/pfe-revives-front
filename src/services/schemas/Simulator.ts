import * as yup from "yup";

export const informationSchema = yup.object({
	subCategory: yup.string().required("Une catégorie est requise."),
	model: yup.string().required("Un modèle est requis."),
	material: yup.string().required("Une matière est requise."),
	printed: yup.string().required("Un imprimé est requis."),
    color: yup.string().required("Une couleur est requise."),
    sizeType: yup.string().required("Un pays est requis."),
    size: yup.string().required("Une taille est requise."),
});

export const descriptionSchema = yup.object({
	description: yup.string().required("Une description est requise."),
	buyPlace: yup.string().required("Une provenance est requise."),
	buyYear: yup.string().required("Une année est requise."),
	serialNumber: yup.number().typeError('Le champs doit contenir seulement des numéros').required("Un numéro de série est requis."),
});

export const stateSchema = yup.object({
    state: yup.string().required("Un état est requis."),
	price: yup.number().typeError('Le champs doit contenir seulement des numéros').required("Un prix d'origine est requis."),
})
