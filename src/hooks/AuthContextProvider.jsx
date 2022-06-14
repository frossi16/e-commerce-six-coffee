/* import { createContext, useState, useEffect } from "react";

const initialState = {
    user: null,
    isAuth: false,
    toggleAuth: () => null,
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState({
        user: null,
        isAuth: false,
    })

    const toggleAuth = (user) => {
        setIsLogged({
            user,
            isAuth: !isLogged.isAuth,
        })
    }

    useEffect(() => {
        const userStorage = JSON.parse(localStorage.getItem('user'))
        const nameStorage = JSON.parse(localStorage.getItem('name'))
        userStorage ? setIsLogged({ user: userStorage.name, isAuth: true }) : setIsLogged({ user: null, isAuth: false })
    }, [])

    return (<AuthContext.Provider value={{ ...isLogged, toggleAuth }}>{children}</AuthContext.Provider>)

}

export default AuthContext; */