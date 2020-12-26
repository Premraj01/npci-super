/** @format */

import React, { useEffect } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Users from '../components/Users'
import Transactions from '../components/Transactions'

import { getAccBalanace } from '../actions/accountActions'

const AmountCard = ({ history }) => {
  const dispatch = useDispatch()

  const getBalanace = useSelector((state) => state.getBalanace)
  const { loading, error, balanace } = getBalanace

  useEffect(() => {
    dispatch(getAccBalanace())
  }, [dispatch])

  return (
    <>
      <Card className='amount-card mt-4' style={{ width: '30rem' }}>
        <Card.Body>
          <h4>Amount</h4>
          <hr />
          <Row>
            <Col md={9}>
              {' '}
              <h1 className='ml-3'>
                <i className='fas fa-rupee-sign'></i> {balanace} INR
              </h1>
            </Col>
            <Col md={3}>
              <Button variant='success' onClick={(e) => history.go(0)}>
                Update
              </Button>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col md={6}>
                <Users />
              </Col>
              <Col md={6}>
                <Transactions />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}

export default AmountCard
