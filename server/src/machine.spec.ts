import { toggleMachine } from './machine'

it('should reach "yellow" given "green" when the "TIMER" event occurs', () => {
  const state = toggleMachine.transition('inactive', { type: 'TOGGLE' })

  expect(state.matches('active')).toBeTruthy()
})
