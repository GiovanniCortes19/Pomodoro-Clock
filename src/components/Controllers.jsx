

const Controllers = (props) => {
  return (
    <div className="lengthController flex-C controlBlock">
        <h2 id={`${props.type}-label`}>{`${props.name} Length`}</h2>

        <div className="clickables flex-R">
            <button id={`${props.type}-increment`} onClick={() => props.increaseTime()}>+</button>
            <h3 id={`${props.type}-length`}>{props.length}</h3>
            <button id={`${props.type}-decrement`} onClick={() => props.decreaseTime()}>-</button>
        </div>
    </div>
  )
}

export default Controllers