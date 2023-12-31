/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const context = createContext()
const GlobalContext = ({ children }) => {

    const [favoract, setFavoract] = useState([])
    const [edit, setEdit] = useState()

    function handleFavorite(id) {
        setFavoract([...favoract, id])
    }

    return (
        <context.Provider value={{ favoract, setFavoract, handleFavorite, setEdit, edit }}>
            {children}
        </context.Provider>
    )
}

export default GlobalContext