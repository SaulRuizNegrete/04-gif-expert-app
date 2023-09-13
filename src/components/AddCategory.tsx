import { useState } from 'react'

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
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            ></input>
        </form>
    )
}