/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';
import Tasks from './Tasks';

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="margen">
                <Switch>
                    <Route exact path="/blog_redux" component={Usuarios} />
                    <Route exact path="/tareas" component={Tasks} />
                    <Route exact path="/publicaciones/:key" component={Publicaciones} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
