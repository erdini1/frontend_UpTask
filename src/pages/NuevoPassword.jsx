import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"

const NuevoPassword = () => {

  const [password, setPassword] = useState("")
  const [repetirPassword, setRepetirPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [passwordModificado, setPasswordModificado] = useState(false)

  const { token } = useParams()
  const comprobarToken = async () => {
    try {
      // TODO: Mover hacia un cliente axios
      await axios(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password/${token}`)
      setTokenValido(true)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  useEffect(() => {
    comprobarToken()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe contener al menos 6 caracteres",
        error: true
      })
      return
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true
      })
      return
    }

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password/${token}`
      const { data } = await axios.post(url, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPassword("")
      setRepetirPassword("")
      setPasswordModificado(true)
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
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Reestablece tu contraseña para acceder a tus <span className="text-slate-800">proyectos</span></h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Nueva Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nueva contraseña"
              className="w-full mt-3 p-3 border bg-gray-50 rounded"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password2"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Confirme Contraseña</label>
            <input
              id="password2"
              type="password"
              placeholder="Confirme la contraseña"
              className="w-full mt-3 p-3 border bg-gray-50 rounded"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
          />
        </form>
      )}

      {passwordModificado && (
        <Link
          to={"/"}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >Inicia Sesión</Link>
      )}

    </>
  )
}

export default NuevoPassword