const Task = (props) => {

  const priorityColors = {
    low: '#5bb4c4',
    medium: '#e0a458',
    high: '#d9534f'
  };

  const cardColor = props.done ? 'lightgrey' : priorityColors[props.priority];

  return (
    <div className="card" style={{backgroundColor: cardColor}}>
      <p className="title">{props.title}</p>
      <p>{props.description}</p>
      <p>Due: {props.deadline}</p>
      <p>Priority: {props.priority}</p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  )
}

export default Task;