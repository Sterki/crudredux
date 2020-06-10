import {AGREGA_PRODUCTOS, 
    AGREGA_PRODUCTOS_EXITO, 
    AGREGA_PRODUCTOS_ERROR,
    OBTIENE_PRODUCTOS,
    OBTIENE_PRODUCTOS_EXITO,
    OBTIENE_PRODUCTOS_ERROR,
    OBTIENE_PRODUCTO_ELIMINAR,
    ELIMINA_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTIENE_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
} from '../types';


const inisialState = {

    productos: [],
    error: null,
    loading: false,
    productoeliminar: null,
    productoeditar: null
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
        case ELIMINAR_PRODUCTO_ERROR:
        case EDITAR_PRODUCTO_ERROR:
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
       case OBTIENE_PRODUCTO_ELIMINAR:
           return{
               ...state,
               productoeliminar: action.payload
           }
        case ELIMINA_PRODUCTO_EXITO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }
        case OBTIENE_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }
        case EDITAR_PRODUCTO_EXITO:
            return{
                    ...state,
                    productoeditar: null,
                    productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
            }
        default: return state;

    }

}

