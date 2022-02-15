

const inicialState = [{
    id:1,
    todo: 'Compras pan',
    done:false
}];

const todoReducer = ( state = inicialState, action ) =>{
    if (action?.type === 'agregar') {
        return [...inicialState, action.payload]
    }
    return state;
}

let todos = todoReducer();
// LAS ACCIONES SON LAS QUE MODIFICARAN EL STATE Y EL REDUCER SIEMPRE REGRESARA UN NUEVO STATE AUNQUE NO SE HAGA NADA

const newToDo = {
    id:2,
    todo: 'Aprender React',
    done:false
};

const actionToDo = {
    type: 'agregar', //SE ACOSTUMBRA DECIR TYPE PARA ESPECIFICAR LO QUE SE HARA
    payload: newToDo //SE ACOSTUMBRA LLAMRLE PAYLOAD A LA DATA QUE SE MANDA
}

todos = todoReducer( todos, actionToDo );


console.log(todos);