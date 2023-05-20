import { Button, Flex, Heading, useMediaQuery, useToast } from "@chakra-ui/react";
import { LoginFormData, loginSchema } from "@services/schemas/User";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "@components/Form/FormInput";
import { HiOutlineMail } from "react-icons/hi";
import { login } from "@services/Api/User";

const LoginForm = () => {
	const [isMobile] = useMediaQuery("(max-width: 600px)");
	const navigate = useNavigate();
	const toast = useToast();
	const {
		control,
		handleSubmit,
		resetField,
		formState: { errors, isLoading },
	} = useForm<LoginFormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			const { token } = await login(data);
			localStorage.setItem("token", token);
			toast({
				title: "Vous êtes connecté.",
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
				Vous êtes de retour ? Connectez vous.
			</Heading>
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
				Se connecter
			</Button>
		</Flex>
	);
};

export default LoginForm;
