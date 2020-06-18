import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import UserOrder from  './Components/User_Order/User_order'
import AdminOrder from './Components/Admin_order/Admin_order'
import Student_order_identification from './Components/User_confirm/student_order_identification'
import history from './store/history'
import Alertcheckout from './Components/User_confirm/user_done'
import Admin_todo from './Components/Admin_todo/Admin_todo'

const Loader = () => <div>loading...</div>
const App = () => (
  <Suspense fallback={<Loader/>}>
    <Router history={history}>
      <Switch>
        <Route exact path = "/" component = {Login} />
        <Route path = "/admintodo" component = {Admin_todo}/>
        <Route path = "/order" component = {UserOrder} />
        <Route path = "/admin" component={AdminOrder} />
        <Route path = "/alert" component = {Alertcheckout} />
        <Route path = "/soi" component = {Student_order_identification} />
        {/* <Route path = "/seller/product" component = {SellerProduct} /> */}
      </Switch>
    </Router>
  </Suspense>
)

export default App
