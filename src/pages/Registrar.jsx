import { Link, Form, useActionData } from "react-router-dom"
import Alerta from "../components/Alerta"

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  // Validación
  const errores = []
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios")
  } 
  
  // else {
  //   if (datos.password !== datos.password2) {
  //     errores.push("Las contraseñas no coinciden")
  //   } else {
  //     if (datos.password.length < 6) {
  //       errores.push("La contraseña es demasiado corta, agrega al menos 6 caracteres")
  //     }
  //   }
  // }

  // if (datos.password !== datos.password2) {
  //   errores.push("Las contraseñas no coinciden")
  // }

  // if (datos.password.length < 6) {
  //   errores.push("La contraseña es demasiado corta, agrega al menos 6 caracteres")
  // }

  return errores
}

const Registrar = () => {

  const errores = useActionData()
  console.log(errores)

  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Crea tu cuenta y administra tus <span className="text-slate-800">proyectos</span></h1>

      {errores?.length !== 0 ? errores?.map((error, i) => <Alerta key={i} error={error} />) : ""}

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
      </Form>

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

    </>
  )
}

export default Registrar