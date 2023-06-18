import {useState, useEffect} from 'react'
import Controllers from './components/Controllers'
import Timer from './components/Timer'

export const App = () => {
  const [workTime, setWorkTime] = useState(25 * 60)
  const [breakTime, setBreakTime] = useState(5 * 60)

  const [displayTime, setDisplayTime] = useState(25 * 60)

  const [timerRunning, setTimerRunning] = useState(false)
  const [onBreak, setOnBreak] = useState(false)

  // FUNCTIONS
  function increaseTime(){
    if (this.type === 'work' && workTime < 60*60){
      setWorkTime(prev => prev + 60)
    } else if (this.type === 'break' && breakTime < 60*60){
      setBreakTime(prev => prev + 60)
    }
  }

  function decreaseTime(){
    if (this.type === 'work' && workTime > 0){
      setWorkTime(prev => prev - 60)
    } else if (this.type === 'break' && breakTime > 0){
      setBreakTime(prev => prev - 60)
    }
  }

  // TIMER EFFECT

  return (
    <>
      <div className="title">
        <p>Pomodoro Clock</p>
      </div>

      <div className="controllers flex-R">
        <Controllers
          name = 'Break'
          type = 'break'
          length = {breakTime}
          increaseTime = {increaseTime}
          decreaseTime = {decreaseTime}
        />

        <Controllers
          name = 'Work'
          type = 'work'
          length = {workTime}
          increaseTime = {increaseTime}
          decreaseTime = {decreaseTime}
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

