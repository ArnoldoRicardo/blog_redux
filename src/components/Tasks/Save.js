import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tasksActions from '../../actions/tasksActions';

class Save extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            task: '',
        };
    }

    componentDidMount() {
        const {
            match: {
                params: { user_id, task_id },
            },
        } = this.props;

        if (user_id && task_id) {
            const task = Object.keys(this.props.tasks).length ? this.props.tasks[user_id][task_id] : {};
            this.setState({ id: task.userId, task: task, title: task.title });
        }
    }

    handleInputs = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSave = () => {
        const { id, title, task } = this.state;

        const new_task = {
            userId: id,
            title,
            completed: false,
        };

        if (task) {
            const update_task = {
                ...new_task,
                completed: task.completed,
                id: task.id,
            };

            this.props.update(update_task);
        } else {
            this.props.add(new_task);
        }
    };

    disabled = () => {
        const { id, title } = this.state;

        if (id && title) {
            return false;
        }
        return true;
    };

    showAction = () => {
        const { error, loading } = this.props;

        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <Fatal mensaje={error} />;
        }
    };

    render() {
        const { id, title } = this.state;

        return (
            <div>
                <h1>Guardar Tarea</h1>
                Usuario id:
                <input type="number" name="id" value={id} onChange={this.handleInputs} />
                <br />
                <br />
                titulo:
                <input type="text" name="title" value={title} onChange={this.handleInputs} />
                <br />
                <br />
                <button onClick={this.handleSave} disabled={this.disabled()}>
                    Guardar
                </button>
                {this.showAction()}
                {!Object.keys(this.props.tasks).length && <Redirect to="/blog_redux/tareas" />}
            </div>
        );
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);
