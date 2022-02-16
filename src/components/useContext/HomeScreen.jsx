import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {

  const { user } = useContext(UserContext);
  // console.log(`userContext`, context);

  return (
    <>
        <h1>Home Screen {user.nombre} </h1>
        <hr />
    </>
  )
}

export default HomeScreen