import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="todo-title">{title}</p>
      <div className="button-conainer">
        <button className="button" type="button" onClick={onDelete}>
          delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
