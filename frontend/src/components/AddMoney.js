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
import { getAccountInfo, addMoneyAcc } from '../actions/accountActions'

const AddMoney = ({ history }) => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0)
  const [val, setVal] = useState(false)
  const [message, setMessage] = useState('')
  const getAccount = useSelector((state) => state.getAccount)
  const { loading, error, account } = getAccount
  const addMoney = useSelector((state) => state.addMoney)
  const { responce } = addMoney
  const amountInt = Number(amount)

  useEffect(() => {
    dispatch(getAccountInfo())
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (amountInt < 1) {
      setMessage('Wrong Input..Amount should be greater than or equal to 1')
      setVal(true)
    } else {
      dispatch(addMoneyAcc(amountInt, account.token))
      console.log('res', responce)
      if (responce === 'Success') {
        history.push('/moneystatus')
      }
    }
  }
  return (
    <>
      <Card className='payment-card mt-4 p-3' style={{ width: '30rem' }}>
        <Card.Body>
          <h4>Add Money</h4>
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
                {val && <h6 style={{ color: 'red' }}>{message}</h6>}
              </Col>
              <Col md={3}>
                <Button type='submit' variant='primary'>
                  Add
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default AddMoney
