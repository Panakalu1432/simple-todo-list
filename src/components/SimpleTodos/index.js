import {Component} from 'react'
import Item from '../TodoItem'
import NavBar from '../NavBar'
import PopCard from '../PopCard'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isCompleted: false,
  },
]

class SimpleTodos extends Component {
  state = {list: initialTodosList, popView: false}

  onDelete = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(each => each.id !== id),
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each =>
        each.id === id ? {...each, isCompleted: !each.isCompleted} : each,
      ),
    }))
  }

  onEdit = (id, updatedTitle) => {
    this.setState(prevState => ({
      list: prevState.list.map(each =>
        each.id === id ? {...each, title: updatedTitle} : each,
      ),
    }))
  }

  addTodo = () => {
    this.setState({popView: true})
  }

  onAddEventOf = inputText => {
    this.setState(prevState => ({list: [...prevState.list, inputText]}))
  }

  onEdit = (id, updatedTitle) => {
    this.setState(prevState => ({
      list: prevState.list.map(each =>
        each.id === id ? {...each, title: updatedTitle} : each,
      ),
    }))
  }

  render() {
    const {list, popView} = this.state

    return (
      <>
        <NavBar openAddTodo={this.addTodo} />
        <div className="bg-container">
          <div className="bg-card">
            <ul>
              {list.map(each => (
                <Item
                  each={each}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                  key={each.id}
                  toggleComplete={this.toggleComplete}
                />
              ))}
            </ul>
          </div>
        </div>
        {popView && (
          <PopCard
            open={popView}
            closePopup={() => this.setState({popView: false})}
            onAddEventOf={this.onAddEventOf}
          />
        )}
      </>
    )
  }
}
export default SimpleTodos
