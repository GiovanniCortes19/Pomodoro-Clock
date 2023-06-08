

const Timer = (props) => {
  return (
    <div className="display flex-C">
        <div className="clock controlBlock">
            <h2>{props.name}</h2>
            <div>{props.time}</div>
        </div>

        <div className="clockButtons flex-R">
            <button className="">Play / Stop</button>
            <button className="">Reset</button>
        </div>
    </div>
  )
}

export default Timer