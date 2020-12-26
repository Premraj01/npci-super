/** @format */

import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const PaymentSteps = ({ amountWind, upiWind, statusWind }) => {
  return (
    <Nav className='justify-content-center'>
      <Nav.Item>
        {amountWind ? (
          <LinkContainer to='/payment/amount'>
            <Nav.Link>Enter Amount</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Enter Amount</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {upiWind ? (
          <LinkContainer to='/payment/upi'>
            <Nav.Link>UPI</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>UPI</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {statusWind ? (
          <LinkContainer to='/payment/status'>
            <Nav.Link>status</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>status</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default PaymentSteps
