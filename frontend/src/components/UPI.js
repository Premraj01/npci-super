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
  Container,
} from 'react-bootstrap'
import { getUPIInfo, updateBalanace } from '../actions/accountActions'
import { saveTransaction } from '../actions/transactionActions'
import PaymentSteps from '../components/PaymentSteps'

const UPI = ({ history }) => {
  const [upi, setUpi] = useState('')
  const [message, setMessage] = useState('')
  const [button, setButton] = useState('Validate')

  const dispatch = useDispatch()
  const getUPI = useSelector((state) => state.getUPI)
  const { loading, error, UPI } = getUPI

  const amountInStorage = JSON.parse(localStorage.getItem('amount'))
  const balanace = JSON.parse(localStorage.getItem('Account_balanace'))
  const customer = JSON.parse(localStorage.getItem('userId'))

  useEffect(() => {
    if (!customer) {
      history.push('/')
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getUPIInfo(upi))
    setButton('Pay')
    const userId = customer._id
    const userName = customer.name
    const userImage = customer.image
    const amountSent = amountInStorage
    const updatedBalance = balanace - amountInStorage

    if (!UPI) {
      setMessage('Wrong UPI..!!')
    } else {
      dispatch(saveTransaction(userId, userName, userImage, amountSent))
      dispatch(updateBalanace(updatedBalance))
      setButton('Pay')

      history.push('/status')
    }
  }

  return (
    <>
      <Card className='payment-card mt-4 p-3' style={{ width: '30rem' }}>
        <PaymentSteps amountWind upiWind />
        <Card.Body>
          <h4>Enter the UPI</h4>
          <hr />
          <Form className='ml-5 p-2' onSubmit={submitHandler}>
            <Form.Row>
              <Col md={8}>
                <InputGroup className='mb-3'>
                  <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>
                      <i className='fas fa-rupee-sign'></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type='password'
                    placeholder='Enter the UPI'
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                  />
                </InputGroup>
                {error && <h6 style={{ color: 'red' }}>{message}</h6>}
              </Col>
              <Col md={4}>
                <Button type='submit' variant='primary'>
                  {button}
                </Button>
                <h6 style={{ color: 'gray' }}>* Click Twice</h6>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default UPI
