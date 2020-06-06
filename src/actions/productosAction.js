import {AGREGAR_PRODUCTO,
        AGREGAR_PRODUCTO_EXITO,
        AGREGAR_PRODUCTO_ERROR} from '../types';


export function creaNuevoProducto(producto){

    return(dispatch) =>{

        dispatch( agregarProducto() );
        try {

            dispatch( agregarProductoExito(producto) );

        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError() );
        }
    }
}
const agregarProducto = () =>({

    type: AGREGAR_PRODUCTO
})
const agregarProductoExito = (producto) =>({

    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = () =>({

    type: AGREGAR_PRODUCTO_ERROR

})