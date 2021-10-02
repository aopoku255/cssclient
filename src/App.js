import logo from './logo.svg'
import './App.css'
import MyNavbar from './components/MyNavbar'
import KnustBadge from './components/KnustBadge'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import News from './pages/News'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Announcement from './pages/Announcement'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/news-today' component={News} />
        <Route exact path='/announcement' component={Announcement} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
