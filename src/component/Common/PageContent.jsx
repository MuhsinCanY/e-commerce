import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Shop from '../../pages/Shop'
import Contact from '../../pages/Contact'

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
    </Switch>
  )
}
