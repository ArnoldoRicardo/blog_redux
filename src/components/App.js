import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './usuarios';

const Tareas = () => <div>Tareas</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
    </BrowserRouter>
  );
}
