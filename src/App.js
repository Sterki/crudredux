import React, {Fragment} from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProductos from './components/EditarProductos';
function App() {
  return (
   
    <Router>
        <Header />
          <div className="container mt-5">
              <Switch>
                  <Route exact path='/' component={Productos} />
                  <Route exact path='/productos/nuevo' component={NuevoProducto} />
                  <Route exact path='/productos/editar/:id' component={EditarProductos} />
              </Switch>

          </div>

    </Router>
  );
}

export default App;
