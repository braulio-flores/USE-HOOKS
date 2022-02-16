import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const { valuesForm, handleInputChange, reset } = useForm({logg:''});
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(`valueForm`, valuesForm);
    setUser({...user, nombre:valuesForm.logg});
    reset();
  }
  

  return (
    <>
        <h1 className='mt-3'>Login Screen</h1>
        <form onSubmit={ handleSubmit }>
          <input onChange={ handleInputChange } type="text" name="logg" id="logg" className='form-control' value={ valuesForm.logg }/>
          <button type="submit" className='btn btn-primary mt-3'>Logeo</button>
        </form>
        <hr />
    </>
  )
}

export default LoginScreen