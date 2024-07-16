/** @format */

import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 export const  AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [token, setToken] = useState(localStorage.getItem("token") || "");
//    const navigate = useNavigate();
   const loginAction = async (data) => {
    console.log(data);
      try {
         const response = await fetch("http://localhost:5000/loginUser", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });
         const res = await response.json();
         if (res.data) {
            setUser(res.data.user);
            setToken(res.token);
            localStorage.setItem("token", res.token);
            // navigate("/dashboard");
            return;
         }
         throw new Error(res.message);
      } catch (err) {
         console.error(err);
      }
   };

   const logOut = () => {
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
    //   navigate("/");
   };

   return (
      <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;

