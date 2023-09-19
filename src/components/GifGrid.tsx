import { GifItem } from "./GifItem"
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }: any) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map( (image: any) =>(
                        <GifItem 
                            key={image.id} 
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}