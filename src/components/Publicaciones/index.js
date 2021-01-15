/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionActions from '../../actions/publicacionActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionTraerPorUsuario } = publicacionActions;

class Publicaciones extends Component {
    constructor() {
        super();
        this.state = {
            usuario: null,
        };
    }
    async componentDidMount() {
        const {
            usuariosTraerTodos,
            publicacionTraerPorUsuario,
            match: {
                params: { key },
            },
        } = this.props;

        if (!this.props.usuarioReducer.usuarios.length) {
            await usuariosTraerTodos();
        }
        if (!this.props.publicacionReducer.publicaciones.hasOwnProperty(key)) {
            publicacionTraerPorUsuario(key);
        }
    }

    ponerUsuario = () => {
        const {
            usuarioReducer,
            match: {
                params: { key },
            },
        } = this.props;

        if (usuarioReducer.error) {
            return <Fatal mesaje={usuarioReducer.error} />;
        }

        if (!usuarioReducer.usuarios.length || usuarioReducer.cargando) {
            return <Spinner />;
        }

        const nombre = usuarioReducer.usuarios[key].name;

        return (
            <div>
                <h1>Publicaciones de {nombre} </h1>
            </div>
        );
    };

    ponerPublicaciones = () => {
        const {
            usuarioReducer,
            publicacionReducer,
            publicacionReducer: { publicaciones },
            match: {
                params: { key },
            },
        } = this.props;

        if (publicacionReducer.error || usuarioReducer.error) {
            return <Fatal mesaje={publicacionReducer.error} />;
        }

        if (!publicaciones.hasOwnProperty(key) || publicacionReducer.cargando) {
            return <Spinner />;
        }

        return publicaciones[key].map((publicacion) => (
            <div className="pub_titulo" key={publicacion.id} onClick={() => alert(publicacion.id)}>
                <h2>{publicacion.title}</h2>
                <p>{publicacion.body}</p>
            </div>
        ));
    };

    render() {
        console.log(this.props.publicacionReducer);
        return (
            <div>
                {this.ponerUsuario()}
                {this.ponerPublicaciones()}
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
    usuariosTraerTodos,
    publicacionTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
