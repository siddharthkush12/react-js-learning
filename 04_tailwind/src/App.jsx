import Card from './components/card'
import React from 'react'

function App() {
  let myobj={
    userName:"siddharth",
    age:21
  }
  let newarr=[1,2,3,4];
  return (
    <>
    <Card userName={myobj.userName} btnText="Click Me" />
    <Card {...myobj} />
    <Card obj={newarr} />
   
    </>
  )
}

export default App