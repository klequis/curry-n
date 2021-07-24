const expect = require('chai').expect
import _argPattern from '../src/fns/_argPattern'
import * as R from 'ramda'
import { log } from '../src/logger'

const input = [
  { ln: 6, args: [], result: ['x', 'x', 'x'] },

  {
    ln: 11,
    args: [R.__],
    result: ['p', 'x', 'x']
  },
  {
    ln: 12,
    args: [1],
    result: ['v', 'x', 'x']
  },
  {
    ln: 17,
    args: [R.__, R.__],
    result: ['p', 'p', 'x']
  },
  {
    ln: 18,
    args: [R.__, 2],
    result: ['p', 'v', 'x']
  },
  {
    ln: 19,
    args: [1, R.__],
    result: ['v', 'p', 'x']
  },
  {
    ln: 20,
    args: [1, 2],
    result: ['v', 'v', 'x']
  },
  {
    ln: 25,
    args: [R.__, R.__, R.__],
    result: ['p', 'p', 'p']
  },
  {
    ln: 26,
    args: [R.__, R.__, 3],
    result: ['p', 'p', 'v']
  },
  {
    ln: 27,
    args: [R.__, 2, R.__],
    result: ['p', 'v', 'p']
  },
  {
    ln: 28,
    args: [1, R.__, R.__],
    result: ['v', 'p', 'p']
  },
  {
    ln: 29,
    args: [R.__, 2, 3],
    result: ['p', 'v', 'v']
  },
  {
    ln: 30,
    args: [1, R.__, 3],
    result: ['v', 'p', 'v']
  },
  {
    ln: 31,
    args: [1, 2, R.__],
    result: ['v', 'p', 'v']
  },
  {
    ln: 32,
    args: [1, 2, 3],
    result: ['v', 'v', 'v']
  }
]

const mkLbl = (args) => {
  return args.map((a) => {
    return a === R.__ ? 'p' : a
  })
}

describe('new', function () {
  for (let i = 0; i < input.length; i++) {
    it(`input ${mkLbl(input[i].args)} should have all members ${
      input[i].result
    }`, function () {
      expect(_argPattern(...input[i].args)).to.have.all.members(input[i].result)
    })
  }
})
