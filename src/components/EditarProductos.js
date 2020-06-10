import React,{useState, useEffect} from 'react';
import {obtieneProductoEditarAction, editarProductoAction} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const EditarProductos = () => {

    const [datos, guardarProducto] = useState({

        nombre: '',
        precio: ''
    })
    
    
    const dispatch = useDispatch();
    const history = useHistory();
    const productoaeditar = useSelector( state => state.producto.productoeditar);
    
    useEffect(()=>{

        guardarProducto(productoaeditar);


    },[productoaeditar]);

    if(datos === null) return null; 
    const {nombre, precio} = datos;
    // lenar el formulario
   
    const onChangeFormulario = e =>{

        guardarProducto({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    // const {nombre, precio} = productoaeditar;

    const productoEditar = (producto) => dispatch( editarProductoAction(producto) );

    const submitProducto = e =>{

        e.preventDefault();
        
        productoEditar(datos);
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
                                onSubmit={submitProducto}
                            >
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={onChangeFormulario}
                                        
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
                                        onChange={onChangeFormulario}
                                        
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