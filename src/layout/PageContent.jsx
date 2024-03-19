import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Team from '../pages/Team'
import Product from '../pages/Product'
import Singup from '../pages/Signup'
import Login from '../pages/Login'
import ShoppingCart from '../pages/ShoppingCart'
import { useSelector } from 'react-redux'
import Order from '../pages/Order'

export default function PageContent() {
  const { isLogin } = useSelector((state) => state.userReducer)

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/shopping" exact>
        <Shop />
      </Route>
      <Route path="/shopping/:gender/:category/:page" exact>
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
      <Route path="/shoppingCart">
        {isLogin ? <ShoppingCart /> : <Redirect to="/login" />}
      </Route>
      <Route path="/order">
        {isLogin ? <Order /> : <Redirect to="/login" />}
      </Route>
      <Route path="/:category/:productId/:slug" exact>
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
