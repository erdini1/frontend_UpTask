import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Recupera el acceso a tus <span className="text-slate-800">proyectos</span></h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
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

        <input
          type="submit"
          value="Recupera tu contraseña"
          className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
        />
      </form>

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

    </>
  )
}

export default OlvidePassword