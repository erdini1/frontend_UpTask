import { Link, Form, useActionData } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from "../components/Alerta"

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const { email } = datos

  let alerta = {}
  if (email === "" || email.length < 6) {
    alerta.msg = "Debe colocar un correo valido"
    alerta.error = true
    return alerta
  }

  try {
    const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })
    alerta.msg = data.msg
    alerta.error = false
    alerta.form = true
  } catch (error) {
    alerta.msg = error.response.data.msg
    alerta.error = true
  }

  return alerta
}

const OlvidePassword = () => {

  const alerta = useActionData()

  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Recupera el acceso a tus <span className="text-slate-800">proyectos</span></h1>

      {alerta?.msg && <Alerta alerta={alerta} />}

      {alerta?.form !== true ? (
        <div>
          <Form
            method="post"
            className="my-10 bg-white shadow rounded-lg p-10"
          >
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

            <input
              type="submit"
              value="Recupera tu contraseña"
              className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
            />
          </Form>

          <nav className="lg:flex lg:justify-between">
            <Link
              to={"/"}
              className="block text-center my-5 text-slate-500 uppercase text-sm"
            >¿Ya posees una cuenta? Inicia Sesión</Link>
            <Link
              to={"/registrar"}
              className="block text-center my-5 text-slate-500 uppercase text-sm"
            >¿No tienes una cuenta? Registrate</Link>
          </nav>
        </div>


      ) : (
        <Link
          to={"/"}
          className="block text-center my-5 text-slate-500 uppercase text-lg"
        >Inicia Sesión</Link>
      )}





    </>
  )
}

export default OlvidePassword