import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('pruebas en GifExpertApp Component', () => { 

    const newCategory = 'New Category'

    test('debe hacer match con el snapshot ', () => { 
        const { container } = render(<GifExpertApp />) 
        expect(container).toMatchSnapshot()
     })

     test('debe de agregar una nueva categoría', () => { 
        
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);

      })
     
     test('No debe agregar una categoria repetida', () => { 
        
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: '' } })
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
        
      })
 })