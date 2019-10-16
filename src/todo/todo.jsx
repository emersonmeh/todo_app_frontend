<<<<<<< HEAD
import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
=======
import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>Todo</h1>
            </div>
        )
    }
>>>>>>> 8a359922aac2a0b36d93645bfbd9e97deeb16ab5
}