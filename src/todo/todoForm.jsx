import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import iconButton from '../template/iconButton'

export default props => {
    
    /* Adiciona atalhos de teclado */
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

        return (
            <div role='form' className='todoForm'>
        
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adiocione uma tarefa'
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}></input>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd} />
                    <IconButton style='info' icon='search'
                        onChange={props.handleSearch} /> 
                    <IconButton style='default' icon='close'
                        onClick={props.handleClear} />
                </Grid> 
            </div>
        )
    
}