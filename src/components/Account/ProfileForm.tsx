import { Button, Center, Flex, useMediaQuery } from "@chakra-ui/react"
import FormInput from "@components/Form/FormInput"
import { yupResolver } from "@hookform/resolvers/yup"
import { ProfileFormData, profileSchema } from "@services/schemas/Account"
import { useAppSelector } from "@store/hooks"
import React, { forwardRef, useImperativeHandle, useState } from "react"
import { Controller, useForm } from "react-hook-form"

export interface ProfileFormRef {
	onModify: () => void
}

const ProfileForm = forwardRef<ProfileFormRef, {}>((props, ref) => {
	const { user } = useAppSelector((state) => state.auth)
	const [isMobile] = useMediaQuery("(max-width: 600px)")
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
		formState: { errors, isLoading }
	} = useForm<ProfileFormData>({
		defaultValues: {
			password: "",
			confirmPassword: "",
			email: user?.email,
			address: "",
			postalCode: "",
			city: "",
			phone: ""
		},
		mode: "onChange",
		resolver: yupResolver(profileSchema)
	})

	const onSubmit = async (data: ProfileFormData) => {
		console.log(data)
		setIsReadOnly(true)
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
							label="Votre mot de passe"
							placeholder="Saississez votre mot de passe"
							isRequired
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
							isRequired
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

			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="8">
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
					isLoading={isLoading}>
					Enregistrer
				</Button>
			</Center>
		</Flex>
	)
})

export default ProfileForm
