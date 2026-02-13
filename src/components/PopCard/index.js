import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const PopCard = ({open, closePopup}) => (
  <div className="popup-container">
    <Popup modal onClose={closePopup} open={open}>
      {close => (
        <>
          <div />
          <button type="button" className="trigger-button" onClick={closePopup}>
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default PopCard
