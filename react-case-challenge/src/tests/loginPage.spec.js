import React from 'react'
import renderWithRouter from './renderWithRouter'
import LoginPage from '../pages/LoginPage'

describe('Login page tests', () => {
  it('Should have the right path', () => {
    const { history } = renderWithRouter(<LoginPage />)
    const pathname = history.location.pathname
    expect(pathname).toBe('/')
  })

})
