import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import AppRouter from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";


const init = ()=>{
  return localStorage.getItem('user') || {logged: false};
}

const HeroesApp = () => {  
  
  const [user, dispatch] = useReducer( authReducer, {}, init);

  useEffect(() => {
      if (!user) return;
      localStorage.setItem('user',JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}
    >  
        <AppRouter />
    </AuthContext.Provider>
  )
}

export default HeroesApp;
