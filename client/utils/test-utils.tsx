import { render, RenderOptions } from '@testing-library/react'
import { FC, ReactElement } from 'react'
import Theme from '../src/containers/Theme'

// https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders: FC = ({ children }) => {
  return <Theme>{children}</Theme>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
