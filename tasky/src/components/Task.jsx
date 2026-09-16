const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>{props.description}</p>
      <p>Due: {props.deadline}</p>
      <p>Priority: {props.priority}</p>
      <button onClick={props.markDone}>Done</button>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}></div>
    </div>

    
  )
  
}

export default Task;