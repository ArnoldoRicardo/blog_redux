/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Comments from './Comments';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionActions from '../../actions/publicacionActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionTraerPorUsuario, openComments, getComments } = publicacionActions;

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
            return <Fatal mensaje={usuarioReducer.error} />;
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
            return <Fatal mensaje={publicacionReducer.error} />;
        }

        if (!publicaciones.hasOwnProperty(key) || publicacionReducer.cargando) {
            return <Spinner />;
        }

        return this.showInfo(publicaciones[key], key);
    };

    showInfo = (posts, key) =>
        posts.map((post) => (
            <div className="pub_titulo" key={post.id} onClick={() => this.showComments(key, post.id, post.comments)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                {post.open ? <Comments comments={post.comments} /> : '[ver-comentarios]'}
            </div>
        ));

    showComments = (user_id, post_id, comments) => {
        this.props.openComments(user_id, post_id);
        if (!comments.length) {
            this.props.getComments(user_id, post_id);
        }
    };

    render() {
        // console.log(this.props.publicacionReducer);
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
    openComments,
    getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
