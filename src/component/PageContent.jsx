import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import ProductList from './pageComponent/ProductList'
import Home from './pageComponent/Home'

export default function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="custom-container-out py-4 bg-white">
          <div className="custom-container-in justify-center min-w-full p-0 ">
            <Home />
          </div>
        </div>
      </Route>
      <Route path="/shopping" exact>
        <div className="custom-container-out py-10 bg-white">
          <div className="custom-container-in">
            <ProductList />
          </div>
        </div>
      </Route>
    </Switch>
  )
}
