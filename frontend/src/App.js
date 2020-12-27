/** @format */
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Payment from './components/Payment'
import UPI from './components/UPI'
import AmountCard from './components/AmountCard'
import AddMoney from './components/AddMoney'
import Status from './components/Status'
import MoneyStatus from './components/MoneyStatus'

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Route path='/' component={AmountCard} />
        <Route path='/add_money' component={AddMoney} />
        <Route path='/payment' component={Payment} />
        <Route path='/upi' component={UPI} />
        <Route path='/status' component={Status} />
        <Route path='/moneystatus' component={MoneyStatus} />
      </Router>
    </>
  )
}

export default App
