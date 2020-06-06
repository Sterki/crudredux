import {AGREGAR_PRODUCTO,
        AGREGAR_PRODUCTO_EXITO,
        AGREGAR_PRODUCTO_ERROR} from '../types';


export function creaNuevoProducto(producto){

return(dispatch) =>{

    dispatch( agregarProducto() )
    try {   

        dispatch( agregaProductosExito(producto) );
        
    } catch (error) {
        console.log(error)
        dispatch( agregaProductosError() );
    }

}
}

const agregarProducto = () =>({

    type: AGREGAR_PRODUCTO
})

const agregaProductosExito = (producto) =>({


    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto

})
const agregaProductosError = () =>({

    type: AGREGAR_PRODUCTO_ERROR
})