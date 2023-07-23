import { Link } from "react-router-dom"

const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-w font-black text-6xl capitalize text-green-700">Reestablece tu contraseña para acceder a tus <span className="text-slate-800">proyectos</span></h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
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
          />
        </div>

        <input
          type="submit"
          value="Guardar nueva contraseña"
          className="bg-emerald-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 transition-colors"
        />
      </form>

    </>
  )
}

export default NuevoPassword