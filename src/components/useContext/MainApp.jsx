import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {

  const [user, setUser] = useState({nombre:'Braulio'})

  return (
    <>
      <UserContext.Provider value={ {
        user, 
        setUser,
        temporal:1234
      } }>

        <AppRouter />
      </UserContext.Provider>
      
    </>
  );
};

export default MainApp;
