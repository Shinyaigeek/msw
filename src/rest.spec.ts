import { rest } from './rest'

test('exports all REST API methods', () => {
  expect(rest).toBeDefined()
  expect(Object.keys(rest)).toEqual([
    'head',
    'get',
    'post',
    'put',
    'delete',
    'patch',
    'options',
  ])
})
