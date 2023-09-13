import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory: any) => {

        if (categories.includes(newCategory)) return

        //setCategories([...categories, 'Valorant'])
        setCategories(cat => [...cat, newCategory])
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
