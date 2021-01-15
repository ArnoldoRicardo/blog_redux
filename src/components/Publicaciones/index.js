/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    if (!this.props.usuarioReducer.usuarios.length) {
      await this.props.usuariosTraerTodos();
    }
    if (!this.props.publicacionReducer.publicaciones.hasOwnProperty(this.props.match.params.key)) {
      this.props.publicacionTraerPorUsuario(this.props.match.params.key);
    }
  }

  render() {
    console.log(this.props.publicacionReducer.publicaciones);
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
  usuariosTraerTodos,
  publicacionTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
