

const Timer = (props) => {
  return (
    <div className="display flex-C">
        <div className="clock controlBlock">
            <h2>{props.name}</h2>
            <div className="time">{`${(props.time/60).toString().length == 1 ? `0${props.time/60}` : props.time/60}:${(props.time%60).toString().length == 1 ? `0${props.time%60}` : props.time%60}`}</div>
        </div>

        <div className="clockButtons flex-R">
            <button className="playReset-btn">Play / Stop</button>
            <button className="playReset-btn" onClick={()=>props.resetTimer()}>Reset</button>
        </div>
    </div>
  )
}

export default Timer