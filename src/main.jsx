import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import OlvidePassword from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';

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
				element: <Registrar />
			},
			{
				path: 'olvide-password',
				element: <OlvidePassword />
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
		<RouterProvider router={router} />
	</React.StrictMode>
);
