import {AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR} from '../types/index';

const inisialState = {

    productos :[],
    error: null,
    loading: false
}
export default function(state = inisialState, action) {

    switch(action.type){
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                error: true
            }
        default: return state;

    }
}