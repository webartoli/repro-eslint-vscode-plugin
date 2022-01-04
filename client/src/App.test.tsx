import { fireEvent, render, screen } from '../utils/test-utils'
import App from './App'

test('should contain button', async () => {
  render(<App />)
  expect(screen.getByTestId('button')).toBeInTheDocument()
})

test('increment', async () => {
  render(<App />)
  // const button = screen.getByText('count is', { exact: false })
  const button = screen.getByTestId('button')

  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)

  expect(screen.getByTestId('count')).toHaveTextContent('3')
})
