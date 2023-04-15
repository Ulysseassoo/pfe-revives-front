import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalTheme from "./theme";

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
			element: <Home />,
		},
		{
			path: "/about",
			element: <About />,
		},
	]);

	return (
		<ChakraProvider theme={GlobalTheme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
