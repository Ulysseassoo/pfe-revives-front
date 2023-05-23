import { Box, Button, Flex, HStack, useMediaQuery, useToast } from "@chakra-ui/react";
import FormInput from "@components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, schema } from "@services/schemas/Contact";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const ContactForm = () => {
	const [isSmallerThan750] = useMediaQuery("(max-width: 750px)");

	const toast = useToast();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		defaultValues: {
			email: "",
			message: "",
			firstname: "",
			lastname: "",
		},
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			toast({
				title: "Succès",
				description: "Votre message a bien été envoyé",
				status: "success",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
			reset();
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
		<Flex gap="6" as="form" flexDir="column" onSubmit={handleSubmit(onSubmit)}>
			<Flex flexDir={isSmallerThan750 ? "column" : "row"} gap="4">
				<Controller
					name="lastname"
					control={control}
					render={({ field: { ref, ...rest } }) => (
						<FormInput
							label="Votre nom"
							errorMessage={errors.lastname?.message}
							placeholder="Saisir votre nom..."
							isRequired
							{...rest}
						/>
					)}
				/>
				<Controller
					name="firstname"
					control={control}
					render={({ field: { ref, ...rest } }) => (
						<FormInput
							label="Votre prénom"
							errorMessage={errors.firstname?.message}
							placeholder="Saisir votre prénom..."
							isRequired
							{...rest}
						/>
					)}
				/>
			</Flex>

			<Controller
				name="email"
				control={control}
				render={({ field: { ref, ...rest } }) => (
					<FormInput
						label="Votre addresse email"
						errorMessage={errors.email?.message}
						placeholder="Saisir votre addresse email..."
						isRequired
						{...rest}
					/>
				)}
			/>

			<Controller
				name="message"
				control={control}
				render={({ field: { ref, ...rest } }) => (
					<FormInput
						as="textarea"
						pt="1"
						h="200px"
						label="Votre message"
						placeholder="Saisir votre message..."
						resize={"none"}
						isRequired
						errorMessage={errors.message?.message}
						{...rest}
					/>
				)}
			/>

			<Button
				mt="4"
				p="2"
				maxW="30%"
				background="primary"
				color="white"
				_hover={{
					background: "primaryHover",
				}}
				borderRadius="none"
				type="submit"
				isLoading={isSubmitting}
			>
				Envoyer
			</Button>
		</Flex>
	);
};

export default ContactForm;
