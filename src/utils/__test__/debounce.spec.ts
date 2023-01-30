import { debounce } from '../debounce'

describe('# debounce', () => {
  afterEach(jest.clearAllMocks)

  const callback = jest.fn()
  jest.useFakeTimers()

  it('should trigger callback after 250ms of the first call', () => {
    const debounced = debounce(callback, 250)

    debounced()
    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(200)
    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(100)
    expect(callback).toBeCalledTimes(1)
  })

  it('should trigger callback after 250ms of the last call', () => {
    const debounced = debounce(callback, 250)

    debounced()
    jest.advanceTimersByTime(100)

    debounced()
    jest.advanceTimersByTime(200)
    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(300)
    expect(callback).toBeCalledTimes(1)
  })

  it('should trigger callback twice when more than 250ms between calls', () => {
    const debounced = debounce(callback, 250)

    debounced()
    jest.advanceTimersByTime(250)
    expect(callback).toBeCalledTimes(1)

    debounced()
    jest.advanceTimersByTime(250)
    expect(callback).toBeCalledTimes(2)
  })

  it('should bind this correctly', () => {
    const obj = {
      target: 'foo',
      fn () { callback(this.target) },
      debounced: () => {},
    }

    obj.debounced = debounce(obj.fn, 0)

    obj.debounced()
    jest.runAllTimers()

    expect(callback).toBeCalledWith('foo')
  })

  it('should passed the correct parameters', () => {
    const fn = function (...args: string[]) {
      callback(...args)
      return 'baz'
    }
    const debounced = debounce(fn, 0)

    debounced('foo', 'bar')
    jest.runAllTimers()

    expect(callback).toBeCalledWith('foo', 'bar')
  })
})
