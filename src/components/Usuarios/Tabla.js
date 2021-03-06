/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Tabla(props) {
    const ponerFilas = () =>
        props.usuarios.map((usuario) => (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
                <td>
                    <Link to={`/blog_redux/publicaciones/${usuario.id}`}>
                        <div className="eye-solid icon"></div>
                    </Link>
                </td>
            </tr>
        ));

    return (
        <table className="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Enalce</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>{ponerFilas()}</tbody>
        </table>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.usuarioReducer;
};

export default connect(mapStateToProps)(Tabla);
