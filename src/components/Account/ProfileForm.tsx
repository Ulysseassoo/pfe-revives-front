import { Flex, useMediaQuery } from "@chakra-ui/react"
import FormInput from "@components/Form/FormInput"
import { yupResolver } from "@hookform/resolvers/yup"
import { ProfileFormData, profileSchema } from "@services/schemas/Account"
import React from "react"
import { Controller, useForm } from "react-hook-form"

const ProfileForm = () => {
	const [isMobile] = useMediaQuery("(max-width: 600px)")

	const {
		control,
		handleSubmit,
		formState: { errors, isLoading }
	} = useForm<ProfileFormData>({
		defaultValues: {
			password: "",
			confirmPassword: "",
			email: "",
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
	}

	return (
		<Flex gap="4" flexDir="column" as="form" w={isMobile ? "90%" : "80%"} onSubmit={handleSubmit(onSubmit)}>
			<Flex flexDir={isMobile ? "column" : "row"} alignItems="center" gap="4">
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Prénom"
							placeholder="Saississez votre prénom"
							isRequired
							errorMessage={errors.firstname?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
						/>
					)}
					name="firstname"
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							label="Nom"
							placeholder="Saississez votre nom"
							isRequired
							errorMessage={errors.lastname?.message}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
						/>
					)}
					name="lastname"
				/>
			</Flex>
		</Flex>
	)
}

export default ProfileForm
