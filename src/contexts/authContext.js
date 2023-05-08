import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const MY_AUTH_APP = "MY_AUTH_APP_1"

export const AuthContext = createContext();



export function AuthContextProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);

  const login = useCallback(function () {

    window.localStorage.setItem(MY_AUTH_APP, true);

    setIsAuthenticated(true);

  }, []);


  const logout = useCallback(function () {

    window.localStorage.removeItem(MY_AUTH_APP);

    setIsAuthenticated(false);

  }, []);


  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated
  }), [login, logout, isAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes ={
  children: propTypes.object
};