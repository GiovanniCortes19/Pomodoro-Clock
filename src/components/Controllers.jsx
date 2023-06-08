

const Controllers = (props) => {
  return (
    <div className="lengthController flex-C controlBlock">
        <h2 id={`${props.type}-label`}>{`${props.name} Length`}</h2>

        <div className="clickables flex-R">
            <button id={`${props.type}-increment`}>+</button>
            <h3 id={`${props.type}-length`}>{props.length}</h3>
            <button id={`${props.type}-decrement`}>-</button>
        </div>
    </div>
  )
}

export default Controllers