import { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext()

const ProyectosProvider = () => {

    const [proyectos, setProyectos] = useState([])
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) return

                // TODO: Pasar esta configuración a otro archivo
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios("/proyectos", config)
                setProyectos(data)

            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        obtenerProyectos()
    }, [])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000)
    }

    const submitProyecto = async proyecto => {
        // Agregar el proyecto a la API
        try {
            const token = localStorage.getItem("token")
            if (!token) return

            // Datos de autenticación que tienen que ser pasadas en cliente axios
            // TODO: Pasar esta configuración a otro archivo 
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post("/proyectos", proyecto, config)
            setProyectos([...proyectos, data])

            setAlerta({
                msg: "Proyecto creado correctamente",
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate("/proyectos")
            }, 2000)

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const obtenerProyecto = async id => {
        const token = localStorage.getItem("token")
        if (!token) return

        try {
            // TODO: Pasar esta configuración a otro archivo 
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios(`/proyectos/${id}`, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                mostrarAlerta,
                alerta,
                submitProyecto,
                obtenerProyecto
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