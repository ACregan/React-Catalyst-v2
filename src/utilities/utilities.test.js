import { getScreenSize } from './utilities'

test('test the getScreenSize function', () => {
  expect(getScreenSize(598)).toEqual('xs')
  expect(getScreenSize(601)).toEqual('sm')
  expect(getScreenSize(901)).toEqual('md')
  expect(getScreenSize(1201)).toEqual('lg')
  expect(getScreenSize(1801)).toEqual('xl')
})
