import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory: any) => {

        if (categories.includes(newCategory)) return

        //setCategories([...categories, 'Valorant'])
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            {/** Titulo */}
            <h1>GifExpertApp</h1>

            {/**Input */}
            <AddCategory
                //setCategories={ setCategories } 
                onNewCategory={(value: any) => onAddCategory(value)}
            />

            {/**Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
