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
import SneakerDetail from '@pages/Sneakers/detail'

// Fonts
import "@fontsource/metropolis";
import "@fontsource/open-sans";
import Contact from "./pages/Contact";

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
	]);

	return (
		<ChakraProvider theme={GlobalTheme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
