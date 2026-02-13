import {Link, withRouter} from 'react-router-dom'
import './index.css'

const NavBar = props => {
  const {openAddTodo} = props
  return (
    <>
      <div className="nav-container">
        <h1 className="heading">Simple Todos</h1>
        <div className="nav-mini-card">
          <button
            type="button"
            className="nav-btn"
            onClick={() => openAddTodo()}
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(NavBar)
