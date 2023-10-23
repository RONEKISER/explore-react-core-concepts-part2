import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './user'
import Friends from './friends'

function App() {
  function handleClick(){
    alert('button click')
  }
  const handelbutton = () =>{
    alert('button two was click')
  }
  const handelfour =(num)=>{
    alert(num + 4)
  }
  return (
    <>
    <Friends></Friends>
    <Friends></Friends>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <h1> React core concepts</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handelbutton}>click 2</button>
      <button onClick={() =>
        {alert('click')}}>Click3</button>
      <button onClick={() => handelfour(5)}>click4</button>
    </>
  )
}

export default App
