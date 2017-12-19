import React from "react";
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handlerStatusChange = this
            .handlerStatusChange
            .bind(this)
        this.deleteItem = this
            .deleteItem
            .bind(this)
        this.editItem = this
            .editItem
            .bind(this)
        this.updateItem = this
            .updateItem
            .bind(this)
        this.state = {
            needEdit: false
        }
    }
    handlerStatusChange() {
        let status = !this.props.status
        this
            .props
            .changeStatus(this.props.index, status)
    }
    deleteItem(event) {
        event.stopPropagation();
        event
            .nativeEvent
            .stopImmediatePropagation();
        this
            .props
            .deleteItem(this.props.index)
    }
    editItem() {
        this.setState({needEdit: true})
    }
    updateItem() {
        this.setState({needEdit: false})
        this
            .props
            .updateItem(this.props.index, this.refs.editInput.value)
    }
    render() {
        if (!this.state.needEdit) {
            return (
                <li>
                    <span
                        className={`item-status ${this.props.status
                        ? 'finished'
                        : ''}`}>
                        {this.props.status
                            ? '完成'
                            : '待办'}
                    </span>
                    <span>{this.props.title}</span>
                    <div className="item-btn-group">
                        <button onClick={this.handlerStatusChange}>
                            {this.props.status
                                ? '未完成'
                                : '完成了'}
                        </button>
                        <button onClick={this.editItem}>编辑</button>
                        <button onClick={this.deleteItem}>删除</button>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    <input ref='editInput' type="text" defaultValue={this.props.title}/>
                    <button onClick={this.updateItem}>完成</button>
                </li>
            )
        }
    }
}

export default Item
