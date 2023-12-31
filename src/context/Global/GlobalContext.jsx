/* eslint-disable react/prop-types */
import { createContext } from "react"

export const context = createContext()
const GlobalContext = ({ children }) => {
    return (
        <context.Provider value={"hello"}>
            {children}
        </context.Provider>
    )
}

export default GlobalContext