import React, {Component} from 'react'
import TodoDataService from './TodoDataService'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }
    
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
        //true后面会call render; false不会call render
    }

    componentDidMount() {

        console.log('componentDidMount')
        this.refreshTodos();

    }
    //当我们点击删除时，可以立即更新界面，而不是先去home然后返回todo界面才会更新
    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName() //需要加括号，否则返回整个函数
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response)
                    this.setState({todos : response.data})
                }
            )
        console.log(this.state)

    }
    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo (username, id)
            .then(
                response => {
                    this.setState({message : `Delete of todo ${id} Successful`})
                    this.refreshTodos()

                }
            )
    }
    addTodoClicked() {
        //console.log('create ' + id)
        this.props.navigate(`/todos/-1`)
    }
    updateTodoClicked(id) {
        console.log('update ' + id)
        this.props.navigate(`/todos/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodos(username, id)
        //     .then(
        //         response => {
        //             this.setState({message : `Delete of todo ${id} Successful`})
        //             this.refreshTodos()

        //         }
        //     )
    }
    //after the render is called, the todo list will appear on the page
    render() {
        console.log('render')
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListTodosComponent