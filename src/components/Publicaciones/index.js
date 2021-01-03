/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionActions from '../../actions/publicacionActions';

class Publicaciones extends Component {
    constructor() {
        super();
        this.state = {
            usuario: null,
        };
    }
    componentDidMount() {
        if (!this.props.usuarioReducer.usuarios.length) {
            this.props.traerTodos();
        }
        // else {
        //     const usuario = this.props.usuarios.filter(
        //         (usuario) => usuario.id == this.props.match.params.key
        //     );

        //     debugger;

        //     this.setState({ usuario });
        // }
    }

    render() {
        return (
            <div>
                <h1>Publicaciones de </h1>
                {this.props.match.params.key}
            </div>
        );
    }
}

const mapStateToProps = ({ usuarioReducer, publicacionReducer }) => {
    return {
        usuarioReducer,
        publicacionReducer,
    };
};

const mapDispatchToProps = {
    ...usuariosActions,
    ...publicacionActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
