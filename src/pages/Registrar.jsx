import { Link } from "react-router-dom"

const Registrar = () => {
  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Crea tu cuenta y administra tus <span className="text-slate-800">proyectos</span></h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >Nombre completo</label>
          <input
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
      </form>

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