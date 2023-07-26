import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registrar, { action as registrarAction } from './pages/Registrar';
import OlvidePassword, { action as olvidePasswordAction } from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';

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
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
