import './App.css';
import NavBar from './NavBar'
import HomeBody from './Homebody'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Rooms from './Rooms'
import Contact from './Contact'
import SignIn from './SignIn'
import SignUp from './SignUp'


function App() {
  return (
    <Router>
      <div className = 'App'> 
        <Switch>
          <Route path = '/' exact component = {HomeBody}></Route>
          <Route path = '/rooms' component = {Rooms}></Route>
          <Route path = '/contact' component = {Contact}></Route>
          <Route path = '/signin' component = {SignIn}></Route>
          <Route path = '/SignUp' component = {SignUp}></Route>
        </Switch>
      </div>
    </Router>
  )    
}

export default App;