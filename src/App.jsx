import {useState, useEffect} from 'react'
import Controllers from './components/Controllers'
import Timer from './components/Timer'

export const App = () => {
  const [workTime, setWorkTime] = useState(25 * 60)
  const [breakTime, setBreakTime] = useState(5 * 60)

  const [displayTime, setDisplayTime] = useState(25 * 60)

  const [timerRunning, setTimerRunning] = useState(false)
  const [onBreak, setOnBreak] = useState(true)

  // FUNCTIONS

  // TIMER EFFECT

  return (
    <>
      <div className="title">
        <h1>Pomodoro Clock</h1>
      </div>

      <div className="controllers flex-R">
        <Controllers
          name = 'Break'
          type = 'break'
          length = {breakTime}
        />

        <Controllers
          name = 'Work'
          type = 'work'
          length = {workTime}
        />
      </div>


      {onBreak ? 
        <Timer
          name = 'Break'
          time = {breakTime}
        />
      
      : <Timer
        name = 'Work'
        time = {displayTime}
      />}

    </>
  )
}

export default App

