import {
	FormControl,
	FormLabel,
	InputGroup,
	Input,
	InputRightElement,
	Icon,
	FormHelperText,
	FormErrorMessage,
	InputProps,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IconType } from "react-icons/lib";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
	label: string;
	placeholder: string;
	IconName?: IconType;
	helperText?: string;
	errorMessage?: string;
	isRequired: boolean;
	isPassword?: boolean;
}

const FormInput = ({
	label,
	placeholder,
	IconName,
	helperText,
	errorMessage,
	isRequired,
	isPassword,
	...rest
}: Props & InputProps) => {
	const [isShow, setIsShow] = React.useState(false);
	const handleClick = () => setIsShow(!isShow);

	return (
		<FormControl isRequired={isRequired} isInvalid={Boolean(errorMessage)}>
			<FormLabel>{label}</FormLabel>
			<InputGroup>
				<Input
					border="1px solid black"
					background={"#F3F3F3"}
					focusBorderColor="primary"
					type={isShow ? "text" : isPassword ? "password" : "text"}
					_placeholder={{
						color: "#B1B1B1",
					}}
					placeholder={placeholder}
					{...rest}
				/>
				{IconName ? (
					<InputRightElement>
						<Icon as={IconName} />
					</InputRightElement>
				) : null}

				{isPassword ? (
					<InputRightElement onClick={handleClick} cursor={"pointer"}>
						{isShow ? <Icon as={AiOutlineEyeInvisible} /> : <Icon as={AiOutlineEye} />}
					</InputRightElement>
				) : null}
			</InputGroup>
			{helperText && <FormHelperText color="#1D1D1D">{helperText}</FormHelperText>}
			{errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
		</FormControl>
	);
};

export default FormInput;
