import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
// Usuarios
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registrar, { action as registrarAction } from './pages/Registrar';
import OlvidePassword, { action as olvidePasswordAction } from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
// Proyectos
import RutaProtegida from './layouts/RutaProtegida';
import Proyectos from './pages/Proyectos';

// Context
import { AuthProvider } from './context/AuthProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />
			},
			{
				path: 'registrar',
				element: <Registrar />,
				action: registrarAction
			},
			{
				path: 'olvide-password',
				element: <OlvidePassword />,
				action: olvidePasswordAction
			},
			{
				path: 'olvide-password/:token',
				element: <NuevoPassword />
			},
			{
				path: 'confirmar/:id',
				element: <ConfirmarCuenta />
			}
		]
	},
	{
		path: "/proyectos",
		element: <RutaProtegida />,
		children: [
			{
				index: true,
				element: <Proyectos />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
