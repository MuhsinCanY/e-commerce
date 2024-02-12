import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import ProductList from './pageComponent/ProductList'
import Home from './pageComponent/Home'

export default function PageContent() {
  return (
    <div className="custom-container-out">
      <div className="custom-container-in">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shopping" exact>
            <ProductList />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
