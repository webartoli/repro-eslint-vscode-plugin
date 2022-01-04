import { Reducer, useReducer } from 'react'
import { ActionButton, PrimaryButton } from '@fluentui/react'
import logo from './logo.svg'
import Only from './utils/Only'
import { Header, AppLogo } from './App.styles'

type State = number

type Action = 'inc' | 'reset'

const countReducer: Reducer<State, Action> = (prevState, action) => {
  if (action === 'inc') return prevState + 1
  if (action === 'reset') return 0
  return prevState
}

function App() {
  const [count, send] = useReducer(countReducer, 0)

  console.log('>count', count)

  return (
    <div className="App">
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>Hello Vite + React !</p>
        <p>
          <PrimaryButton data-testid="button" type="button" onClick={() => send('inc')}>
            inc
          </PrimaryButton>

          <ActionButton data-testid="button" type="button" onClick={() => send('reset')}>
            reset
          </ActionButton>
        </p>
        <p data-testid="count">
          <Only when={count} otherwise="count not started: press inc button">
            count is: {count}
          </Only>
        </p>
      </Header>
    </div>
  )
}

export default App
