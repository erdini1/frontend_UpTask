import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // TODO: Mover la alerta hacia su propio Context
  const [alerta, setAlerta] = useState({})



  const handleSubmit = async e => {
    e.preventDefault()

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
      return
    }


    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password
      })
      setAlerta({})

      // Almacenando en LocalStorage el token del usuario
      localStorage.setItem("token", data.token)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Inicia sesión y administra tus <span className="text-slate-800">proyectos</span></h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg p-10"
      >
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >Email</label>
          <input
            id="email"
            type="email"
            placeholder="Correo electronico"
            className="w-full mt-3 p-3 border bg-gray-50 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full mt-3 p-3 border bg-gray-50 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to={"/registrar"}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >¿No tienes una cuenta? Registrate</Link>
        <Link
          to={"/olvide-password"}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >¿Olvidaste tu contraseña?</Link>
      </nav>

    </>
  )
}

export default Login