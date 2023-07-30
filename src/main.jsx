import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom';
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
import NuevoProyecto from './pages/NuevoProyecto';
import Proyecto from './pages/Proyecto';
import EditarProyecto from './pages/EditarProyecto';

// Context
import { AuthProvider } from './context/AuthProvider';
import { ProyectosProvider } from './context/ProyectosProvider';

const router = createBrowserRouter([
	{
		element: <AuthProvider />,
		children: [
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
				element: <ProyectosProvider />,
				children: [
					{
						path: "/proyectos",
						element: <RutaProtegida />,
						children: [
							{
								index: true,
								element: <Proyectos />
							},
							{
								path: "crear-proyecto",
								element: <NuevoProyecto />
							},
							{
								path: "editar/:id",
								element: <EditarProyecto />
							},
							{
								path: ":id",
								element: <Proyecto />
							}
						]
					}
				]
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
