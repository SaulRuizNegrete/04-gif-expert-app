import { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }: any) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }: any) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event: any ) => {
        event?.preventDefault()
        if( inputValue.trim().length <= 1) return
        //setCategories( (categories: any) => [...categories, inputValue])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) } aria-label='form'>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}