import {Component} from 'react'
import Item from '../TodoItem'
import NavBar from '../NavBar'
import PopCard from '../PopCard'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {list: initialTodosList, popView: false}

  onDelete = id => {
    const {list} = this.state

    const filteringDate = list.filter(each => each.id !== id)
    this.setState({list: filteringDate})
  }

  addTodo = () => {
    console.log('lkasdj')
    this.setState({popView: true})
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
                <Item each={each} onDelete={this.onDelete} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
        {popView && (
          <PopCard
            open={popView}
            closePopup={() => this.setState({popView: false})}
          />
        )}
      </>
    )
  }
}
export default SimpleTodos
