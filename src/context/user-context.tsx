"use client"

import * as React from "react"

interface UserContextType {
    name: string | null
    login: (name: string) => void
    logout: () => void
}

const UserContext = React.createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [name, setName] = React.useState<string | null>(null)

    React.useEffect(() => {
        const storedName = localStorage.getItem("user_name")
        if (storedName) {
            setName(storedName)
        }
    }, [])

    const login = (newName: string) => {
        localStorage.setItem("user_name", newName)
        setName(newName)
    }

    const logout = () => {
        localStorage.removeItem("user_name")
        setName(null)
    }

    return (
        <UserContext.Provider value={{ name, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = React.useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}
