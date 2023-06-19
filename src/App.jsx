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
  function increaseTime(){
    if (this.type === 'work' && workTime < 60*60){
      setWorkTime(prev => prev + 60)
    } else if (this.type === 'break' && breakTime < 60*60){
      setBreakTime(prev => prev + 60)
    }
  }

  function decreaseTime(){
    if (this.type === 'work' && workTime > 60){
      setWorkTime(prev => prev - 60)
    } else if (this.type === 'break' && breakTime > 60){
      setBreakTime(prev => prev - 60)
    }
  }

    // reset
  function resetTimer(){
    setWorkTime(prev => 25*60)
    setBreakTime(prev => 5*60)
    setDisplayTime(workTime)
    setOnBreak(false)
    setTimerRunning(false)
  }
  

  // CHANGING BETWEEN TIMERS
  useEffect(() => { 
    if (onBreak){
      setDisplayTime(breakTime)
    } else {
      setDisplayTime(workTime)
    }

   }, [onBreak, workTime, breakTime])

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
          length = {breakTime/60}
          increaseTime = {increaseTime}
          decreaseTime = {decreaseTime}
        />

        <Controllers
          name = 'Work'
          type = 'work'
          length = {workTime/60}
          increaseTime = {increaseTime}
          decreaseTime = {decreaseTime}
        />
      </div>


      {onBreak ? 
        <Timer
          name = 'Break'
          time = {displayTime}
          resetTimer = {resetTimer}
        />
      
      : <Timer
        name = 'Work'
        time = {displayTime}
        resetTimer = {resetTimer}
      />}

    </>
  )
}

export default App

