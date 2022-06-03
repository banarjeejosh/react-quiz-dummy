import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
  }


  export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
  
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("currentUser") !== null){
            setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
       }else{
           setCurrentUser(null);
       }
    //   const unsubscribe = () => {
    //   };
  
    //   return unsubscribe;
    }, []);
  
    // signup function
  
    // login function
    function login(users, email, password) {
      const user = users.filter((user)=>user.email === email && user.password === password )
    //   debugger
      if(user.length) {
        navigate("/quiz")
        setCurrentUser(user);
        localStorage.setItem('currentUser',JSON.stringify(user))
      } else {
        throw TypeError("login faild");

      }
        
    }
  
    // logout function
    function logout() {
      setCurrentUser(null);
      localStorage.removeItem("currentUser");

    }
  
    const value = {
      currentUser,
      login,
      logout
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }