/** @format */

import React, { useEffect } from 'react'
import spinner from './success.gif'
import { Card } from 'react-bootstrap'

const MoneyStatus = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 5000)
  }, [])
  return (
    <>
      <Card className='payment-card mt-4 p-3' style={{ width: '30rem' }}>
        <img
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
        <h6 style={{ textAlign: 'center' }}>
          wait..!!Page will automatically redirected..{' '}
        </h6>
      </Card>
      )
    </>
  )
}

export default MoneyStatus
