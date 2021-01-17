import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav id="menu">
            <Link to="/blog_redux">Usuarios</Link>
            <Link to="/blog_redux/tareas">Tareas</Link>
        </nav>
    );
}
