import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import ProductList from './homeComponent/ProductList'
import Home from './homeComponent/Home'
import Categorys from './Categorys'

export default function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/shopping" exact>
        <Categorys />
        <ProductList />
      </Route>
    </Switch>
  )
}
