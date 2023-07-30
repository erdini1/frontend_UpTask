import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"

const Proyecto = () => {

    const { obtenerProyecto } = useProyectos()
    const { id } = useParams()

    useEffect(() => {
        obtenerProyecto(id)
    }, [])

    return (
        <div>Proyecto</div>
    )
}

export default Proyecto