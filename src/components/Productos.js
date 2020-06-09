import React, {Fragment, useEffect} from 'react';
import {obtieneProductosAction} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import Listadoproductos from './Listadoproductos';

const Productos = () => {

    
    const dispatch = useDispatch();

    useEffect(() =>{

        const obtieneProductos = () => dispatch( obtieneProductosAction() );
        obtieneProductos();

    }, [])
    
    const productos = useSelector( (state) => state.producto.productos);
    const error = useSelector( state => state.producto.error);
    const cargando = useSelector( state => state.producto.loading);
   
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            {error ?<p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {cargando ? <p className="text-center">Cargando....</p> : null}
            <table className="table table-striped">
                   
                <thead className="bg-primary table-dark">
                    <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                        {productos.lenght === 0 ? 'No hay productos' : (

                            productos.map(producto => (

                                    <Listadoproductos 
                                        key={producto.id}
                                        producto={producto}
                                    />
                            ))
                        )}
                </tbody>
            </table>
        </Fragment>
        
     );
}
 
export default Productos;