import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

const Comments = (props) => {
    if (props.com_error) {
        console.log(props.com_error);
        return <Fatal mensaje={props.com_error} />;
    }

    if (props.com_cargando && !props.comments.length) {
        return <Spinner />;
    }

    const putComments = () =>
        props.comments.map((comment) => (
            <li key={comment.id}>
                <b>
                    <u>{comment.email}</u>
                </b>
                <br />
                {comment.body}
            </li>
        ));

    return <ul>{putComments()}</ul>;
};

const mapStateToprops = ({ publicacionReducer }) => publicacionReducer;

export default connect(mapStateToprops)(Comments);
