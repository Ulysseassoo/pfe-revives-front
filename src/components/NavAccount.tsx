import { useAppSelector } from "@store/hooks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React from 'react'
import { Avatar, Image, useMediaQuery, 
	Link as ChakraLink,
    Icon,
    Text
 } from "@chakra-ui/react";
import Account from "../assets/account.svg";
import { RiAccountPinCircleLine } from "react-icons/ri";



const NavAccount = () => {
    const navigate = useNavigate();
	const { isAuthenticated, user } = useAppSelector((state) => state.auth);
	const [isSmallerThan960] = useMediaQuery("(max-width: 960px)");


    if (isAuthenticated) {
        return (
            <Link to="/account">
                <Avatar size="xs" bg="primary" name={`${user?.first_name} ${user?.last_name}`} cursor={"pointer"} />
            </Link>
        );
    }

    if(isSmallerThan960) {
        return 	<ChakraLink
					as={Link}
					style={{
						textDecoration: "none",
					}}
					to="/login"
					display="flex"
					alignItems="center"
					gap="2"
				>

                    <Icon as={RiAccountPinCircleLine} cursor={"pointer"} boxSize={5} />
    <Text fontSize="md">Se connecter</Text>

                </ChakraLink>
    }

    return <Image cursor={"pointer"} onClick={() => navigate("/register")} src={Account} w="20px" />;
};

export default NavAccount