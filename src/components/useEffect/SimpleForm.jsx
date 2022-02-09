import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log(`Hey`);
    },[]);
    // AQUI TENEMOS UN EFFECT QUE SE EJECUTA CADA QUE E RECARGA LA PAGINA POR LOS []

    useEffect(() => {
        // console.log(`Algo del Form State cambio`);
    },[formState]);
    // AQUI TENEMOS UN EFECTO QUE SE EJECUTA CADA QUE ALGO DEL FORM STATE CAMBI 

    useEffect(() => {
        // console.log(`Algo del Email cambio`);
    },[email]);
    // AQUI TENEMOS UN EFECTO QUE SE EJECUTA CADA QUE ALGO DEL EMAIL CAMBI 

    
    
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
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
                <label >Nombre</label>
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
            {(name === '123')&& <Message />}
        </>
    );
};

export default SimpleForm;

// USE EFECT NOS PERMITE LANZAR UN EFECTO SECUNDARIO CUANDO ALGO SUCESA EN NUESTROS COMPONENTES
