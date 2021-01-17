import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tasksActions from '../../actions/tasksActions';

class Tasks extends Component {
    componentDidMount() {
        if (!Object.keys(this.props.tasks).length) {
            this.props.getAll();
        }
    }

    showContent = () => {
        const { tasks, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <Fatal mensaje={error} />;
        }

        return Object.keys(tasks).map((user_id) => (
            <div key={user_id}>
                <h2>Usuario {user_id}</h2>
                <div className="task_container">{this.showTasks(user_id)}</div>
            </div>
        ));
    };

    showTasks = (user_id) => {
        const { tasks } = this.props;
        const userTasks = { ...tasks[user_id] };

        return Object.keys(userTasks).map((task_id) => (
            <div key={task_id}>
                <input type="checkbox" defaultChecked={userTasks[task_id].completed} />
                {userTasks[task_id].title}
                <button className="m_left">
                    <Link to={`/blog_redux/tareas/guardar/${user_id}/${task_id}`}>Editar</Link>
                </button>
                <button className="m_left">Elimiar</button>
            </div>
        ));
    };

    render() {
        return (
            <div>
                <button>
                    <Link to="/blog_redux/tareas/guardar">Agregar</Link>
                </button>
                {this.showContent()}
            </div>
        );
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);
