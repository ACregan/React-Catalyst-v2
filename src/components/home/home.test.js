import React from 'react'
import { render, cleanup, getByTestId, fireEvent } from 'testUtils'
import Home from './home'

afterEach(cleanup)

it('should take a snapshot', () => {
  const { asFragment } = render(
    <Home />
  )
  expect(
    asFragment(
      <Home />
    )
  ).toMatchSnapshot()
})
