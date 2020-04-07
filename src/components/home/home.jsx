import React from 'react'
import CounterExample from './counterExample/counterExample'

const Home = () => (
  <>
    <p>I am regular copy</p>
    <p className="bold">I am bold copy</p>
    <p className="italic">I am italics copy</p>
    <p className="boldItalic">I am bold italics copy</p>
    <CounterExample />
  </>
)

export default Home
