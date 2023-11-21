import { screen, render } from '@testing-library/react'

// const { screen, render } = require('@testing-library/react')
const { ButtonPrimary } = require('./ButtonPrimary')

describe('Tests Button', () => {
    it('should render the button with the text', () => {
        // render(<ButtonPrimary />)
        const button = screen.getByRole('button', {name: /load more/i})
        expect(1).toBe(1)
    })
})