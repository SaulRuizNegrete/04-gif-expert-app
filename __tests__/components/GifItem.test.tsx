import React from 'react'
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/index'

describe('first', () => { 

    const title = "Mi Título"
    const url = "https://one-punch.com/saitama.jpg"

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con la URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url}/>)
        //expect( screen.getByRole('img').src).toBe(url)

         const {src , alt } = screen.getByRole('img') as HTMLImageElement;
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el título en el componente', () => { 
        render(<GifItem title={title} url={url}/>)
        expect( screen.getByText(title) ).toBeTruthy()
     })
 })
