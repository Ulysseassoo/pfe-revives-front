import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalTheme from "./theme/theme";
import NavbarWrapper from "./components/NavbarWrapper";
import Sneakers from "./pages/Sneakers";
import Restauration from "./pages/Restauration";
import SneakerDetail from "@pages/Sneakers/detail";
import Contact from "./pages/Contact";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Authentification from "@components/Authentification";
import { register } from "swiper/element/bundle";

// Fonts
import "@fontsource/metropolis/100.css";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/300.css";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/600.css";
import "@fontsource/metropolis/700.css";
import "@fontsource/metropolis/800.css";
import "@fontsource/metropolis/900.css";
import "@fontsource-variable/open-sans/wdth.css";

// To be able to use swiper components slider
register();

function App() {
	useEffect(() => {
		// Connect to the Socket.io server
		const socket = io(import.meta.env.VITE_SOCKET_SERVER_HOST);

		// Listen for events from the server
		socket.on("welcome", (data) => {
			console.log("Message from server:", data);
		});

		// Clean up the Socket.io connection on component unmount
		return () => {
			socket.disconnect();
		};
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavbarWrapper />,
			children: [
				{ path: "/", element: <Home /> },
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/sneakers",
					element: <Sneakers />,
				},
				{
					path: "/sneakers/:id",
					element: <SneakerDetail />,
				},
				{
					path: "/restauration",
					element: <Restauration />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
			],
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);

	return (
		<ChakraProvider theme={GlobalTheme}>
			<Authentification>
				<RouterProvider router={router} />
			</Authentification>
		</ChakraProvider>
	);
}

export default App;
