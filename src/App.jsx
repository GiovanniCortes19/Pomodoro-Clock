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
    beep.pause()
    beep.currentTime = 0
  }
  
  function runStop(){
    setTimerRunning(prev => !prev)
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
  let timer;
  const beep = document.getElementById('beep')


  useEffect(() => { 
    if (timerRunning && displayTime > 0){
      timer = setInterval(() => {
        setDisplayTime(prev => prev - 1)
      }, 1000);
      return () => clearInterval(timer)
    } else if (timerRunning && displayTime === 0){
      beep.play()
      if (onBreak){
        setOnBreak(prev => !prev)
        setDisplayTime(workTime)
      } else {
        setOnBreak(prev => !prev)
        setDisplayTime(breakTime)
      }
    }

   }, [displayTime, onBreak, timerRunning])

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
          runOrStop = {runStop}
        />
      
      : <Timer
        name = 'Work'
        time = {displayTime}
        resetTimer = {resetTimer}
        runOrStop = {runStop}
      />}

    </>
  )
}

export default App

