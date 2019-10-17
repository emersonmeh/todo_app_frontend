import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    
    // Amarra o this à Classe Todo. (contexto léxico)
    // Usado para métodos que precisam acessar o estado atual.
    constructo(props) {
        super(props)
        //this para ler o estado do obj, para alterar o estado usar o setState
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    // Recebe um evento(e = onChange) e seta o novo estado para o {obj}
    // spred tras todos os dados do estado (descrição e lista)
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    
    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}
