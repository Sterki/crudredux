import {AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function creaNuevoProducto(producto){

    return async(dispatch) =>{

            dispatch( agregarProducto() );
            try {

                    await clienteAxios.post('/productos', producto);
                    dispatch( agregarProductoExito(producto) );
                    Swal.fire(
                        'Correcto',
                        'El producto se agregó correctamente',
                        'success'
                    );

            } catch (error) {
                console.log(error);
                dispatch( agregarProductoError() );
                Swal.fire({
                    icon: 'error',
                    title: 'Oh no...',
                    text:'Hubo un error!',                    
                })
            } 
    }
}
const agregarProducto = () => ({

    type: AGREGAR_PRODUCTO

})
const agregarProductoExito = (producto) => ({

    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
}) 
const agregarProductoError = () => ({

    type: AGREGAR_PRODUCTO_ERROR
})

export function obtieneProductos(){

    return async(dispatch) =>{

        dispatch( comenzarDescarga() );
            try {
                    const resultado = await clienteAxios.get('/productos');
                    // console.log(resultado.data);
                    dispatch( descargaExitosa(resultado.data) );

            } catch (error) {
                console.log(error);
                dispatch( descargaError() );
            }
    }
}

const comenzarDescarga = () =>({

    type: COMENZAR_DESCARGA

})
const descargaExitosa = (productos) =>({

    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos


})
const descargaError = () => ({

    type: DESCARGA_PRODUCTOS_ERROR
})