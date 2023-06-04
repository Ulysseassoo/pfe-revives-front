import { useToast } from "@chakra-ui/react"
import { createFavorite, deleteFavorite } from "@services/Api/Favorite"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { addFavorite, removeFavorite } from "@store/reducers/Favorites"
import React, { useState } from "react"

const useFavorite = () => {
	const dispatch = useAppDispatch()
	const { isAuthenticated } = useAppSelector((state) => state.auth)
	const [isLoadingFavorites, setIsLoadingFavorites] = useState(false)
	const [isLoadingFavoritesDelete, setIsLoadingFavoritesDelete] = useState(false)
	const toast = useToast()

	const addProductToFavorites = async (shoe_id: number, model: string) => {
		setIsLoadingFavorites(true)
		if (!isAuthenticated) {
			setIsLoadingFavorites(false)

			return toast({
				title: "Erreur",
				description: "Vous devez être authentifier pour ajouter un produit aux favoris.",
				status: "error"
			})
		}
		try {
			const favorite = await createFavorite(shoe_id)
			dispatch(addFavorite(favorite.data))
			toast({
				title: "Succès",
				description: `Vous avez ajouter ${model} à vos favoris`,
				status: "success"
			})
			setIsLoadingFavorites(false)
		} catch (error: any) {
			toast({
				title: "Erreur",
				description: error.response.data.errors[0] || "Une erreur est survenue, veuillez réessayer",
				status: "error"
			})
			setIsLoadingFavorites(false)
		}
	}

	const deleteProductFromFavorites = async (shoe_id: number, model: string) => {
		setIsLoadingFavorites(true)
		if (!isAuthenticated) {
			setIsLoadingFavorites(false)

			return toast({
				title: "Erreur",
				description: "Vous devez être authentifier pour retirer un produit des favoris.",
				status: "error"
			})
		}
		try {
			await deleteFavorite(shoe_id)
			dispatch(removeFavorite(shoe_id))
			toast({
				title: "Succès",
				description: `Vous avez retirer ${model} de vos favoris`,
				status: "success"
			})
			setIsLoadingFavorites(false)
		} catch (error: any) {
			toast({
				title: "Erreur",
				description: error.response.data.errors[0] || "Une erreur est survenue, veuillez réessayer",
				status: "error"
			})
			setIsLoadingFavorites(false)
		}
	}

	return {
		addProductToFavorites,
		isLoadingFavorites,
		isLoadingFavoritesDelete,
		deleteProductFromFavorites
	}
}

export default useFavorite
