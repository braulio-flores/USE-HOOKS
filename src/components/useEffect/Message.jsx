import React, { useEffect, useState } from "react";

const Message = () => {
    const [cords, setCords] = useState({ x: "", y: "" });
    const { x, y } = cords;

    const mouseMove = (e) => {
        // console.log(':D');
        const cords = { x: e.x, y: e.y };
        setCords(cords);
    };

    useEffect(() => {
        
        window.addEventListener("mousemove", mouseMove);
        // CUANDO SE MONTA SE LE AGREGA EL LISTENER
        console.log("Ccomponente montado"); //CUERPO DEL EFECTO
        // ESTE ES EL DIDMOUNT

        return () => {
            console.log("Compponente desmontado"); //FASE DE LIMPIEZA
            //   ESTE ES EL UMOUNT
            window.removeEventListener("mousemove", mouseMove);
            //  CUANDO SE DESMONTA LE QUITAMOS ESE EVENT LISTENER
        };
    }, []);

    return (
        <>
            <h3>Componente Mensaje</h3>
            <p>El mouse esta sobre x: {x}, y: {y}</p>
        </>
    );
};

export default Message;
