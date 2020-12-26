/** @format */
import React, { useEffect } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import PaymentSteps from '../components/PaymentSteps'
import spinner from './success.gif'
import { LinkContainer } from 'react-router-bootstrap'

const Status = ({ history }) => {
  const customer = localStorage.getItem('userId')
  useEffect(() => {
    if (!customer) {
      history.push('/')
    }
    localStorage.clear()
    setTimeout(() => {
      history.push('/')
    }, 3000)
  }, [])
  return (
    <>
      <Card className='payment-card mt-4 p-3' style={{ width: '30rem' }}>
        <PaymentSteps amountWind statusWind />
        <img
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </Card>
      )
    </>
  )
}
export default Status
