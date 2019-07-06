import {combineToAsync} from '../index'

describe('combine to async', () => {
  test('combine middlewares to async', async () => {
    const req = {val: 1}
    await combineToAsync((req, res, next) => {
      req.val += 1
      next()
    }, (req, res, next) => {
      req.val += 2
      next()
    })(req)
    expect(req.val).toBe(4)
  })
})
