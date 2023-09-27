import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from '../../src/components'

describe('pruebas en <AddCategory />', () => { 
    test('debe cambiar el valor de una caja de texto', () => { 

        render(<AddCategory onNewCategory={ () => {} } />)
        const input = screen.getByRole('textbox') as HTMLInputElement

        fireEvent.input( input, { target: { value: 'Saitama'}} )

        expect( input.value ).toBe('Saitama')

     })
 })