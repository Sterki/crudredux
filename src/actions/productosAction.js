import {AGREGA_PRODUCTOS, 
    AGREGA_PRODUCTOS_EXITO, 
    AGREGA_PRODUCTOS_ERROR,
    OBTIENE_PRODUCTOS,
    OBTIENE_PRODUCTOS_EXITO,
    OBTIENE_PRODUCTOS_ERROR,
    OBTIENE_PRODUCTO_ELIMINAR,
    ELIMINA_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


    export function creaNuevoProducto(producto){

        return async(dispatch)=>{

                dispatch( agregaProductos() );

            try {

                await clienteAxios.post('/productos', producto);
                dispatch( agregaProductosExito(producto) );
                Swal.fire(
                    'Bien hecho!',
                    'Se ha almacenado el producto correctamente!',
                    'success'
                )


            } catch (error) {
                console.log(error);
                dispatch( agregaProductosError() );
                Swal.fire({
                    icon: 'error',
                    title: 'Oh noo....',
                    text: 'Hubo un error, intentelo de nuevo!'
                })
            }         
        }
    }

    const agregaProductos = () => ({

        type: AGREGA_PRODUCTOS
    })
    const agregaProductosExito = (producto) => ({

        type: AGREGA_PRODUCTOS_EXITO,
        payload: producto

    })
    const agregaProductosError = () => ({

        type: AGREGA_PRODUCTOS_ERROR
    })

    export function obtieneProductosAction(){

        return async(dispatch) =>{

                
                dispatch( obtieneProductos() );

            try {
                   
                     const resultado = await clienteAxios.get('/productos');
                        
                     dispatch( obtieneProductosExito(resultado.data) );
                   
                     
            } catch (error) {
                console.log(error);
                dispatch( obtieneProductosError() );
            }

        }
    }
    const obtieneProductos = () => ({

        type: OBTIENE_PRODUCTOS
    })
    const obtieneProductosExito = (productos) => ({

        type: OBTIENE_PRODUCTOS_EXITO,
        payload: productos
    })
    const obtieneProductosError = () =>({

        type: OBTIENE_PRODUCTOS_ERROR
    })

    export function eliminarProductoaction(id){

              
        return async(dispatch)=>{

                dispatch( eliminaProducto(id) );
                try {

                     await clienteAxios.delete(`/productos/${id}`);
                     dispatch( productoEliminadoExito() );
                     Swal.fire(
                        'Eliminado!',
                        'El producto se eliminó correctamente!',
                        'success'
                      )                     
                } catch (error) {
                    console.log(error);
                    dispatch( eliminarProductoError() );
                }
        }
    }
    const eliminaProducto = (id) => ({

        type: OBTIENE_PRODUCTO_ELIMINAR,
        payload: id
    })
    const productoEliminadoExito = () => ({

        type: ELIMINA_PRODUCTO_EXITO
    })
    const eliminarProductoError = () =>({

        type: ELIMINAR_PRODUCTO_ERROR

    })