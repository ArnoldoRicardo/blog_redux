/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';
import Tasks from './Tasks';
import TasksSave from './Tasks/Save';

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="margen">
                <Switch>
                    <Route exact path="/blog_redux" component={Usuarios} />
                    <Route exact path="/blog_redux/tareas" component={Tasks} />
                    <Route exact path="/blog_redux/tareas/guardar" component={TasksSave} />
                    <Route exact path="/blog_redux/publicaciones/:key" component={Publicaciones} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
