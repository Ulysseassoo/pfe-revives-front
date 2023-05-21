import {
	FormControl,
	FormLabel,
	InputGroup,
	Box,
	Input,
	InputRightElement,
	Icon,
	FormHelperText,
	FormErrorMessage,
	Flex,
	Button,
	Heading,
	useToast,
	useMediaQuery,
} from "@chakra-ui/react";
import FormInput from "@components/Form/FormInput";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerSchema } from "@services/schemas/User";
import { login, register } from "@services/Api/User";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@store/Auth";

const RegisterForm = () => {
	const { setToken } = useAuthStore();
	const [isMobile] = useMediaQuery("(max-width: 600px)");
	const navigate = useNavigate();
	const toast = useToast();
	const {
		control,
		handleSubmit,
		resetField,
		formState: { errors, isLoading },
	} = useForm<RegisterFormData>({
		defaultValues: {
			lastname: "",
			firstname: "",
			password: "",
			confirmPassword: "",
			email: "",
		},
		mode: "onChange",
		resolver: yupResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormData) => {
		try {
			await register({
				email: data.email,
				password: data.password,
				firstname: data.firstname,
				lastname: data.lastname,
			});
			const { token } = await login({
				email: data.email,
				password: data.password,
			});
			localStorage.setItem("token", token);
			setToken(token);
			toast({
				title: "Votre compte a été crée.",
				description: "Vous allez être redirigé vers la page d'accueil",
				status: "success",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
			navigate("/");
		} catch (error: any) {
			toast({
				title: "Une erreur est survenue.",
				description: error.response.data.message || "Veuillez réessayer plus tard",
				status: "error",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Flex gap="4" flexDir="column" as="form" w={isMobile ? "90%" : "80%"} onSubmit={handleSubmit(onSubmit)}>
			<Heading color="#1D1D1D" fontSize={isMobile ? "lg" : "xl"}>
				Nouveau client ? Rentrez vos informations ici.
			</Heading>
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
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormInput
						label="Addresse email"
						placeholder="Saississez votre addresse email"
						isRequired
						IconName={HiOutlineMail}
						errorMessage={errors.email?.message}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
				)}
				name="email"
			/>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormInput
						label="Mot de passe"
						placeholder="Saississez votre mot de passe"
						isRequired
						isPassword
						errorMessage={errors.password?.message}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
				)}
				name="password"
			/>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormInput
						label="Confirmez votre mot de passe"
						placeholder="Saississez à nouveau votre mot de passe"
						isRequired
						isPassword
						errorMessage={errors.confirmPassword?.message}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
				)}
				name="confirmPassword"
			/>

			<Button
				mt="4"
				p="2"
				w="full"
				background="primary"
				color="white"
				_hover={{
					background: "primaryHover",
				}}
				type="submit"
				isLoading={isLoading}
			>
				S'enregistrer
			</Button>
		</Flex>
	);
};

export default RegisterForm;
