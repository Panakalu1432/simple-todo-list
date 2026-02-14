import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const PopCard = ({open, closePopup, onAddEventOf}) => {
  const [eventText, setEventText] = useState('')
  const [error, setError] = useState('')

  const getInputValue = event => {
    setEventText(event.target.value)
    if (event.target.value.trim() !== '') {
      setError('')
    }
  }

  const onSubmitEvent = event => {
    event.preventDefault()

    const newTodo = {
      id: uuidv4(),
      title: eventText,
    }

    onAddEventOf(newTodo)
    setEventText('')
    closePopup()
  }

  return (
    <div className="popup-container">
      <Popup modal onClose={closePopup} open={open} closeOnDocumentClick>
        <div className="popup-card">
          <h2 className="popup-title">Add New Event</h2>

          <form onSubmit={onSubmitEvent} className="popup-form">
            <label htmlFor="todoId" className="popup-label">
              Event
            </label>

            <input
              type="text"
              id="todoId"
              value={eventText}
              onChange={getInputValue}
              className="popup-input"
              placeholder="Enter your event..."
            />

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="submit-btn">
              Add Event
            </button>
          </form>

          <button type="button" className="close-btn" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </Popup>
    </div>
  )
}

export default PopCard
