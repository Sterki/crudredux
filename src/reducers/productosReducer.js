import {AGREGA_PRODUCTOS, 
    AGREGA_PRODUCTOS_EXITO, 
    AGREGA_PRODUCTOS_ERROR,
    OBTIENE_PRODUCTOS,
    OBTIENE_PRODUCTOS_EXITO,
    OBTIENE_PRODUCTOS_ERROR} from '../types';


const inisialState = {

    productos: [],
    error: null,
    loading: false
}
export default (state = inisialState, action)=>{

    switch(action.type){
        case AGREGA_PRODUCTOS:
        case OBTIENE_PRODUCTOS:
            return{
                ...state,
                loading: true
            }
        case AGREGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload],
                error: null
            }
        case OBTIENE_PRODUCTOS_ERROR:
        case AGREGA_PRODUCTOS_ERROR:
            return{
                ...state,
                error: true,
                loading: false
            }
        case OBTIENE_PRODUCTOS_EXITO: 
            return{
                ...state,
                error: false,
                loading: false,
                productos: action.payload
            }
        default: return state;

    }

}

