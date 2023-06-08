import {useState, useEffect} from 'react'
import Controllers from './components/Controllers'
import Timer from './components/Timer'

export const App = () => {
  return (
    <>
      <div className="title">
        <h1>Hello World</h1>
      </div>

      <div className="controllers flex-R">
        <Controllers/>
        <Controllers/>
      </div>


      <Timer/>

    </>
  )
}

export default App

