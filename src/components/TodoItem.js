import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const { id, title} = this.props.todo;

        return (
            <div style = {this.getStyle()}>
                <input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    padding: '5px 9px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    float: 'right'

}

export default TodoItem
