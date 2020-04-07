import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount } from '../../../actions/counterActions'

const CounterExample = () => {
  const counterValue = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <label>Redux Functional Component and Hooks Counter Example</label>
      <div>{`Counter = ${counterValue}`}</div>
      <button onClick={() => dispatch(incrementCount())}>+ 1</button>
      <button onClick={() => dispatch(decrementCount())}>- 1</button>
    </div>
  )
}

export default CounterExample
