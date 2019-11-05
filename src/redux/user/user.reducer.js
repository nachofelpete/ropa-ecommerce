// el reducer es basicamente una función con dos argumentos

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE , action) => {

    switch (action.type) {

        case 'SET_CURRENT_USER':

            return {
                //devolvemos todo lo que está en el state (por eso ...state) y además lo que queremos cambiar
                //que es el payload de la acción incluida en el case (action.payload)
                ...state,
                currentUser: action.payload
            }

        default: 
            return state;
    }

}

export default userReducer;