/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Image, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { listUsers } from '../actions/userActions'

const Users = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='flush' id='dropdown-basic'>
          <strong>
            <i className='fas fa-user'></i> &nbsp; &nbsp;Users
          </strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className='mt-2'>
          {users.map((user) => (
            <Dropdown.Item className='p-1 ml-2' key={user._id}>
              <LinkContainer to='/payment'>
                <Row
                  onClick={() =>
                    localStorage.setItem('userId', JSON.stringify(user))
                  }>
                  <Col md={2}>
                    <Image
                      className='avatar-img'
                      src={user.image}
                      roundedCircle
                    />
                  </Col>
                  <Col md={2}>{user.name}</Col>
                </Row>
              </LinkContainer>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Users
