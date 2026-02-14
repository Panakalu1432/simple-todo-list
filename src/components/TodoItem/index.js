import {useState} from 'react'
import './index.css'

const Item = ({each, onDelete, onEdit, toggleComplete}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(each.title || '')

  const handleSave = () => {
    if (editText.trim() === '') return
    onEdit(each.id, editText)
    setIsEditing(false)
  }

  return (
    <li className="todo-item">
      <div className="left-section">
        <input
          type="checkbox"
          checked={!!each.isCompleted}
          onChange={() => toggleComplete(each.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText || ''}
            onChange={e => setEditText(e.target.value)}
            className="edit-input"
          />
        ) : (
          <p className={`todo-title ${each.isCompleted ? 'completed' : ''}`}>
            {each.title}
          </p>
        )}
      </div>

      <div className="btn-group">
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button className="delete-btn" onClick={() => onDelete(each.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default Item
