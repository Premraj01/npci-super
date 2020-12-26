/** @format */

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card,
  Button,
  Form,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap'

import { getAccBalanace } from '../actions/accountActions'
import PaymentSteps from './PaymentSteps'

const Payment = ({ history, location }) => {
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')
  const [val, setVal] = useState(false)

  const dispatch = useDispatch()

  const getBalanace = useSelector((state) => state.getBalanace)
  const { loading, error, balanace } = getBalanace
  const amountInt = Number(amount)

  const customer = localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getAccBalanace())
    if (!customer) {
      history.push('/')
    }
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (amountInt > balanace || balanace <= 0) {
      setMessage('Insufficient Balanace')
      setVal(true)
    } else {
      history.push('/upi')
      localStorage.setItem('amount', JSON.stringify(amountInt))
    }
  }

  return (
    <>
      <Card className='payment-card mt-4 p-3' style={{ width: '30rem' }}>
        <PaymentSteps amountWind />
        <Card.Body>
          <h4>Make Payment</h4>
          <hr />
          <Form className='ml-5 p-2' onSubmit={submitHandler}>
            <Form.Row>
              <Col md={9}>
                <InputGroup className='mb-3'>
                  <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>
                      <i className='fas fa-rupee-sign'></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type='Number'
                    step='0.01'
                    placeholder='Enter the Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col md={3}>
                <Button type='submit' variant='primary'>
                  Next
                </Button>
              </Col>
              {val && <h6 style={{ color: 'red' }}>{message}</h6>}
            </Form.Row>
          </Form>

          <Form className='ml-5 p-2'>
            <Form.Row>
              <Col md={9}>
                <InputGroup className='mb-3'>
                  <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>
                      <i className='fas fa-rupee-sign'></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type='Number'
                    placeholder='Request the Money'
                    min='1'
                  />
                </InputGroup>
              </Col>
              <Col md={3}>
                <Button type='submit' variant='primary'>
                  Request
                </Button>
              </Col>
              {val && <h6 style={{ color: 'red' }}>{message}</h6>}
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Payment
