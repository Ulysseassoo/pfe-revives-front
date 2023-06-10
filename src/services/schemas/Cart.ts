import * as yup from "yup"

export type CartFormData = {
	size: number
}

export const cartSchema = yup.object({
	size: yup.number().required("Vous devez choisir une taille..")
})
