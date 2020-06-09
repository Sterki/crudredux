import {AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR} from '../types';

const inisialState = {

    productos : [],
    error: null,
    loading: false
}

export default (state = inisialState, action)=>{

    switch(action.type){
        case COMENZAR_DESCARGA:
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                error: true,
                loading: false
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: action.payload,
                error: false
            }
        default: return state;
    }

}

