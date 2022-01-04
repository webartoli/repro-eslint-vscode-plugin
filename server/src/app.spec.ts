import { sum, Users } from './app'
import { mocked } from 'jest-mock'

import realAxios from 'axios'
jest.mock('axios')
// will be jest.mocked
// https://kulshekhar.github.io/ts-jest/docs/guides/test-helpers
const axios = mocked(realAxios, true)

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('should fetch users', async () => {
  const body = [{ name: 'Bob' }]
  const resp = { data: body }
  axios.get.mockResolvedValue(resp)

  const data = await Users.all()
  expect(data).toEqual(body)
})
