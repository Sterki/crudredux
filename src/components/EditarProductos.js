import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editarProductosAction} from '../actions/productosAction';
import { useHistory } from 'react-router-dom';

const EditarProductos = () => {

    const[producto, guardarProducto] = useState({

        nombre: '',
        precio: ''
    })

    const productoeditar = useSelector(state => state.producto.productoeditar)
    const dispatch = useDispatch();
    const history = useHistory();
    const productoEditarExito = (producto) => dispatch( editarProductosAction(producto) )

    useEffect(()=>{

        guardarProducto(productoeditar);

    },[productoeditar])

    if(producto === null)return null;
    const {nombre, precio} = producto;

    const onchangeProducto = e =>{

        guardarProducto({

            ...producto,
            [e.target.name]: e.target.value
        })
    }
    const submitProductoEditar = e =>{

        e.preventDefault();
        productoEditarExito(producto);
        history.push('/');
    }
    return ( 

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Editar producto
                            </h2>
                            <form
                                onSubmit={submitProductoEditar}
                            >
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={nombre}
                                       onChange={onchangeProducto}                                                                                
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio Producto</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Precio Producto"
                                        name="precio"
                                        value={precio}
                                        onChange={onchangeProducto}                                                                                
                                    />
                                </div>
                                <button 
                                    type="submit"    
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Producto</button>
                            </form>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default EditarProductos;