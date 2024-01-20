import React, { createContext, useState, useContext, ReactNode } from "react"

interface UserContextProps {
	children: ReactNode
}

interface UserContextType {
	user: any // Puedes ajustar el tipo de 'user' según la estructura de tu objeto de usuario
	setUserContext: (userData: any) => void // Puedes ajustar el tipo según tus necesidades
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider: React.FC<UserContextProps> = ({ children }) => {
	const [user, setUser] = useState<any>(null) // Puedes ajustar el tipo según la estructura de tu objeto de usuario

	const setUserContext = (userData: any) => {
		setUser({
			isAdmin: true,
		})
	}

	return (
		<UserContext.Provider value={{ user, setUserContext }}>
			{children}
		</UserContext.Provider>
	)
}

const useUserContext = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error(
			"useUserContext debe ser utilizado dentro de un UserProvider"
		)
	}
	return context
}

export { UserProvider, useUserContext }
