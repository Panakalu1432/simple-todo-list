import './index.css'

const Item = props => {
  const {each, onDelete} = props
  const {title, id} = each

  const ondelete = () => {
    onDelete(id)
  }
  return (
    <li className="content-card">
      <p>{title}</p>
      <button type="button" className="btn" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}

export default Item
