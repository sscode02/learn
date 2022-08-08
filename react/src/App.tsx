import { useState,useEffect,useCallback,useMemo } from 'react'
import * as React from 'react';

import './App.css'

const App: React.FC = () => {
  
  let [a, seta] = useState(0)
  
  // const b =  () => { 
  //  seta(++a)
  // }
  const b =  useCallback(() => { 
   seta(++a)
  }, [])
  
  function getdata() { 
    fetch('XXX')
  }

  const c = useMemo(()=>({ a:1}),[])
  // const c = {a:1}
  
  return (
    <React.Fragment>
      <span>i am {a     }</span>
      <button onClick={() => seta(++a)}>i am app</button> 
      <App1 onAction={b} numeric={ c}/>
  </React.Fragment>
  )
 }
const App1: React.FC<any> = React.memo( ({ onAction,numeric}) => {  //not re-render when onActio not change
  console.log('app1 re-render')
  return (
    <React.Fragment>
      <span>{  JSON.stringify(numeric)}</span>
      <button onClick={onAction}>i am app1</button>
      <App2 />
  </React.Fragment>
  )
}
)
const App2: React.FC = () => {
  
  return (
  <React.Fragment>
    <App3/>
  </React.Fragment>
  )
 }
const App3: React.FC = () => {
  console.log('i am app3')
  
  return (
  <React.Fragment>
   <div>i am app3</div>
  </React.Fragment>
  )
 }

export default App
