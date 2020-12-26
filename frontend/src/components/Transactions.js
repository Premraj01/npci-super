/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Image, Row, Col } from 'react-bootstrap'
import user from './img/user.png'
import { getTransactions } from '../actions/transactionActions'
const Transactions = () => {
  const dispatch = useDispatch()

  const getTransaction = useSelector((state) => state.getTransaction)
  const { loading, error, transactions } = getTransaction

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  return (
    <>
      <Dropdown style={{ float: 'right' }}>
        <Dropdown.Toggle variant='flush' id='dropdown-basic'>
          <strong>
            <i className='fas fa-exchange-alt'></i> &nbsp;Transactions
          </strong>
        </Dropdown.Toggle>

        <Dropdown.Menu className='mt-2'>
          {transactions.map((transaction) => (
            <>
              <Dropdown.Item className='p-1 ml-2' key={transaction._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      className='avatar-img'
                      src={transaction.userImage}
                      roundedCircle
                    />
                  </Col>
                  <Col md={5}>
                    <strong>{transaction.userName}</strong>
                  </Col>
                  <Col md={5} style={{ color: 'red' }}>
                    {transaction.amountSent}
                  </Col>
                </Row>
                <Row>
                  <Col>{transaction.createdAt.substring(0, 10)}</Col>
                </Row>
              </Dropdown.Item>
              <hr />
            </>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Transactions
