import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        console.log('up');
        const { keyCode, target } = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === '') {
            alert('输入不能为空');
            return
        }
        this.props.addTodo({
            id: nanoid(),
            name: target.value,
            done: false
        });
        target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
