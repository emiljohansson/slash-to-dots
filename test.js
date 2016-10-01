import test from 'ava'
import slashToDots from './'

test('convert string', t => {
  const expected = 'path.to.file'
  const actual = slashToDots('path/to/file')
  t.is(actual, expected)
})
