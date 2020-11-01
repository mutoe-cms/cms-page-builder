import { generateId } from './utils'

describe('# generateId', () => {
  it('should generate a random string', () => {
    const id = generateId()

    expect(id).toEqual(expect.any(String))
  })
})
