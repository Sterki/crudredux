import React,{useState} from 'react';
import {creaNuevoProducto} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';


const NuevoProducto = ({history}) => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    const dispatch = useDispatch();

    const agregaProducto = (producto) => dispatch( creaNuevoProducto(producto) );

    const cargando = useSelector( (state) => state.producto.loading);
    const error = useSelector( (state) => state.producto.error);

    const handleSubmit = e =>{

        e.preventDefault();

        // validate emtpy fields
        if(nombre.trim() === '' || precio <= 0){

            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Todos los campos son obligatorios'
            })
            return;
        }

        agregaProducto({
            nombre, precio
        });
        history.push('/');

    }


    return ( 

      <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Agregar nuevo producto
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={e=>guardarNombre(e.target.value)}                                                                                                                                                                                                                                                                                                                        
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
                                        onChange={e=>guardarPrecio(Number(e.target.value))}

                                    />
                                </div>
                                <button 
                                    type="submit"    
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar Producto</button>
                                    {cargando ? <p>Cargando ...</p>: null}
                                    {error ? <p className="alert alert-danger p2 mt-4 text-center text-uppercase">Hubo un error</p> : null}
                            </form>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default NuevoProducto;