import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import UserOrder from  './Components/User_Order/User_order'
import AdminOrder from './Components/Admin_order/Admin_order'
import history from './store/history'

const Loader = () => <div>loading...</div>
const App = () => (
  <Suspense fallback={<Loader/>}>
    <Router history={history}>
      <Switch>
        <Route exact path = "/" component = {Login} />
        {/* <Route path = "/product" component = {ProductList} /> */}
        <Route path = "/order" component = {UserOrder} />
        <Route path = "/admin" component={AdminOrder} />
        {/* <Route path = "/register" component = {Register} />
        <Route path = "/cart" component = {Cart} /> } */}
        {/* <Route path = "/seller/product" component = {SellerProduct} /> */}
      </Switch>
    </Router>
  </Suspense>
)

export default App
