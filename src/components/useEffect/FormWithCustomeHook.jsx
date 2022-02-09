import React from "react";
import { useForm } from '../../hooks/useForm';

const FormWithCustomeHook = () => {

    const { valuesForm, handleInputChange } = useForm({
        name: "",
        email: "",
        password:""
    });

    const { name, email, password } = valuesForm;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`valuesForm`, valuesForm);
    }


    return (
        <form onSubmit={ handleSubmit }>
            <h1>Use Effect</h1>
            <hr />
            <div className="form-group">
                <label >Nombre</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label >Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default FormWithCustomeHook;

