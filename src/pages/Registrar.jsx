import { Link, Form, useActionData } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const { nombre, email, password, password2 } = datos

  // Validación
  const alerta = {}
  if ([nombre, email, password, password2].includes("")) {
    alerta.msg = "Todos los campos son obligatorios"
    alerta.error = true
    return alerta
  }

  if (password.length < 6) {
    alerta.msg = "La contraseña debe contener al menos 6 caracteres"
    alerta.error = true
    return alerta
  }

  if (password !== password2) {
    alerta.msg = "Las contraseñas no coinciden"
    alerta.error = true
    return alerta
  }

  // Crear el usuario en la API
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, { nombre, email, password })
    alerta.msg = data.msg
    alerta.error = false
    alerta.form = true
  } catch (error) {
    alerta.msg = error.response.data.msg
    alerta.error = true
  }

  return alerta
}

const Registrar = () => {

  const alerta = useActionData()

  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Crea tu cuenta y administra tus <span className="text-slate-800">proyectos</span></h1>

      {alerta?.msg && <Alerta alerta={alerta} />}

      {alerta?.form !== true ? (
        <div>
          <Form
            method="post"
            className="my-10 bg-white shadow rounded-lg p-10"
          >
            <div className="my-5">
              <label
                htmlFor="nombre"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Nombre completo</label>
              <input
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre"
                className="w-full mt-3 p-3 border bg-gray-50 rounded"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="email"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Email</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Correo electronico"
                className="w-full mt-3 p-3 border bg-gray-50 rounded"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="password"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Contraseña</label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
                className="w-full mt-3 p-3 border bg-gray-50 rounded"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="password2"
                className="uppercase text-gray-600 block text-xl font-bold"
              >Repetir Contraseña</label>
              <input
                name="password2"
                id="password2"
                type="password"
                placeholder="Repite tu contraseña"
                className="w-full mt-3 p-3 border bg-gray-50 rounded"
              />
            </div>

            <input
              type="submit"
              value="Registrarte"
              className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
            />
          </Form >
          <nav className="lg:flex lg:justify-between">
            <Link
              to={"/"}
              className="block text-center my-5 text-slate-500 uppercase text-sm"
            >¿Ya posees una cuenta? Inicia Sesión</Link>
            <Link
              to={"/olvide-password"}
              className="block text-center my-5 text-slate-500 uppercase text-sm"
            >¿Olvidaste tu contraseña?</Link>
          </nav>
        </div>
      ) : (
        <nav className="lg:flex lg:justify-center">
          <Link
            to={"/"}
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >¿Ya confirmaste tu cuenta? Inicia Sesión</Link>
        </nav>
      )}

    </>
  )
}

export default Registrar