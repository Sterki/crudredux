import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {eliminarProductoAction, obtieneProductoEditarAction} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

const Listadoproductos = ({producto}) => {


    const dispatch = useDispatch();
    const history = useHistory();

    const obtieneProductoEliminar = (id) => dispatch( eliminarProductoAction(id) );
    
    const onclickObtieneProducto = id =>{
            
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Una vez eliminado no se puede recuperar el producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
            
            obtieneProductoEliminar(producto.id);   
             
            }
          })            
    } 

    const obtieneProductoEditar = (producto) => dispatch( obtieneProductoEditarAction(producto) );

    const obtenerProductoCompleto = producto =>{

        obtieneProductoEditar(producto);
        history.push(`/productos/editar/${producto.id}`);
    }
    const {nombre, precio, id} = producto;


    return ( 

        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                    <button 
                        type="button"
                        onClick={e=>obtenerProductoCompleto(producto)}
                        className="btn btn-primary">Editar</button>
                    <button type="button"
                        onClick={e=>onclickObtieneProducto(producto.id)}
                        className="btn btn-danger ml-2"
                    >Eliminar</button>
            </td>
        </tr>


     );
}
 
export default Listadoproductos;