import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Team from '../pages/Team'
import Product from '../pages/Product'
import Singup from '../pages/Signup'
import Login from '../pages/Login'

export default function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/shopping" exact>
        <Shop />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route path="/product" exact>
        <Product />
      </Route>
      <Route path="/signup" exact>
        <Singup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  )
}
