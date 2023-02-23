import React from 'react'
import './App.css'
import Card from './components/Card'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {

  let elementos = [4,22,25]
  return (
    <>
     <ClassComponent/>
     <FuncComponent/>
     <Card elemento={elementos[0]}/> 
     <Card elemento={elementos[1]}/>
     <Card elemento={elementos[2]}/>
    </>
  )
}

export default App
