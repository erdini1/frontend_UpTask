import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext()

const ProyectosProvider = () => {

    const [proyectos, setProyectos] = useState([])

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
            }}
        >
            <Outlet />
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext