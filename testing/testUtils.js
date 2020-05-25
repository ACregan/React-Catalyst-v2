// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
// import { ThemeProvider } from 'my-ui-lib'
// import { TranslationProvider } from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'
const store = configureStore()

import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
