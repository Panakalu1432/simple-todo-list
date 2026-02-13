import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SimpleTodos from './components/SimpleTodos'
import PopCard from './components/PopCard'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SimpleTodos} />
    </Switch>
  </BrowserRouter>
)

export default App
