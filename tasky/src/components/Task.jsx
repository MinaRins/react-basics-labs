const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>{props.description}</p>
      <p>Due: {props.deadline}</p>
      <p>Priority: {props.priority}</p>
    </div>
  )
}

export default Task;