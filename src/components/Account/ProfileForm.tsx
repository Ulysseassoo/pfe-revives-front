import { Button, Center, Flex, useMediaQuery, useToast } from "@chakra-ui/react"
import FormInput from "@components/Form/FormInput"
import { yupResolver } from "@hookform/resolvers/yup"
import { updateUserInformations } from "@services/Api/User"
import { ProfileFormData, profileSchema } from "@services/schemas/Account"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { setUser } from "@store/reducers/Auth"
import React, { forwardRef, useImperativeHandle, useState } from "react"
import { Controller, useForm } from "react-hook-form"

export interface ProfileFormRef {
	onModify: () => void
}

const ProfileForm = forwardRef<ProfileFormRef, {}>((props, ref) => {
	const { user } = useAppSelector((state) => state.auth)
	const [isMobile] = useMediaQuery("(max-width: 600px)")
	const toast = useToast()
	const dispatch = useAppDispatch()
	const [isReadOnly, setIsReadOnly] = useState(true)

	const onModify = () => {
		setIsReadOnly(false)
	}

	useImperativeHandle(ref, () => ({
		onModify
	}))

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<ProfileFormData>({
		values: {
			password: "",
			confirmPassword: "",
			email: user?.email ?? "",
			address: user?.shipping_address.address_line_1 ?? "",
			postalCode: user?.shipping_address.zip_code ?? "",
			city: user?.shipping_address.city ?? "",
			phone: user?.phone ?? "",
			country: user?.shipping_address.country ?? ""
		},
		mode: "onChange",
		resolver: yupResolver(profileSchema)
	})

	const onSubmit = async (data: ProfileFormData) => {
		try {
			if (user) {
				const newUser = await updateUserInformations({
					email: data.email,
					firstname: user.first_name,
					lastname: user.last_name,
					password: data.password,
					phone: data.phone,
					postalCode: data.postalCode,
					city: data.city,
					country: data.country,
					address: data.address
				})
				dispatch(setUser(newUser))
				toast({
					title: "Succès",
					description: "Vos informations ont bien été mises à jour",
					status: "success",
					position: "top-right",
					duration: 3000,
					isClosable: true
				})
			}
			setIsReadOnly(true)
			toast
		} catch (error: any) {
			toast({
				title: "Une erreur est survenue.",
				description: "Veuillez réessayer plus tard",
				status: "error",
				position: "top-right",
				duration: 3000,
				isClosable: true
			})
		}
	}

	return (
		<Flex gap="8" flexDir="column" as="form" onSubmit={handleSubmit(onSubmit)}>
			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="8">
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre email"
							placeholder="Saississez votre email"
							isRequired
							errorMessage={errors.email?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="email"
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre addresse"
							placeholder="Saississez votre addresse"
							isRequired
							errorMessage={errors.address?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="address"
				/>
			</Flex>

			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="8">
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre pays"
							placeholder="Saississez votre pays"
							isRequired
							errorMessage={errors.phone?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="country"
				/>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre numéro de téléphone"
							placeholder="Saississez votre numéro de téléphone"
							isRequired
							errorMessage={errors.phone?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="phone"
				/>
			</Flex>

			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="8">
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre code postal"
							placeholder="Saississez votre code postale"
							isRequired
							errorMessage={errors.postalCode?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="postalCode"
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre ville"
							placeholder="Saississez votre ville"
							isRequired
							errorMessage={errors.city?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="city"
				/>
			</Flex>

			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="8">
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Votre nouveau mot de passe"
							placeholder="Saississez votre mot de passe si vous souhaitez le changer"
							isRequired={false}
							errorMessage={errors.password?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="password"
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Confirmation de votre mot de passe"
							placeholder="Saississez votre de passe encore une fois"
							isRequired={false}
							errorMessage={errors.confirmPassword?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isDisabled={isReadOnly}
						/>
					)}
					name="confirmPassword"
				/>
			</Flex>

			<Center>
				<Button
					mt="4"
					p="2"
					w="180px"
					background="primary"
					color="white"
					_hover={{
						background: "primaryHover"
					}}
					type="submit"
					isLoading={isSubmitting}>
					Enregistrer
				</Button>
			</Center>
		</Flex>
	)
})

export default ProfileForm
