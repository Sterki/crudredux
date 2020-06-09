import React from 'react';
import {Link} from 'react-router-dom';
import {eliminarProductoaction} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

const Listadoproductos = ({producto}) => {


    const dispatch = useDispatch();
    const obtieneProductoEliminar = (id) => dispatch( eliminarProductoaction(id) );
    

    const {nombre, precio, id} = producto;

    const eliminarproducto = id =>{

        Swal.fire({
            title: 'Estas seguro de eliminar el producto?',
            text: "Una vez eliminado no podrás recuperar el producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                 // console.log(producto.id);
                obtieneProductoEliminar(id);            
            }
          })
    }
    return ( 

        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                    <Link to={`/productos/editar/${id}`} className="btn btn-primary">Editar</Link>
                    <button type="button"
                        onClick={e=>eliminarproducto(id)}
                        className="btn btn-danger ml-2"
                    >Eliminar</button>
            </td>
        </tr>


     );
}
 
export default Listadoproductos;