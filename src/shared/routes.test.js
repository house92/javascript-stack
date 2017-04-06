import { helloEndPointRoute } from './routes'

test('helloEndPointRoute', () => {
  expect(helloEndPointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndPointRoute(123)).toBe('/ajax/hello/123')
})
