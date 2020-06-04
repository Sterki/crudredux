import React from 'react';

const EditarProductos = () => {
    return ( 

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Editar producto
                            </h2>
                            <form>
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio Producto</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Precio Producto"
                                        name="precio"
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