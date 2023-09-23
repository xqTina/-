import React, { Component } from 'react'
import './index.css'
// import PropTypes from 'prop-types'

export default class Footer extends Component {

    // 全选
    handleCheckAll = (event) => {
        this.props.checkAll(event.target.checked)
    }
    // 清除所有已完成的回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        const total = todos.length;
        const checkAll = doneCount === total && total !== 0
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={checkAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}

