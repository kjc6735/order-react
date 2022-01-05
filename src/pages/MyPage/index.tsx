import React from 'react'
import styled from '@emotion/styled'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './styles.css'
import OrderList from '../../components/OrderList'
const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`
const Li = styled.li`
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;

  &:hover {
    background: #aaa;
  }
`
const CircleImg = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      <img
        src="http://via.placeholder.com/150x150"
        style={{ borderRadius: '50%' }}
      />
      <div>재찬</div>
    </div>
  )
}
const MyPage = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div className="sideBar" style={{ borderRight: '1px solid #aaa' }}>
        <img src="http://via.placeholder.com/200x50" />
        <CircleImg />
        <Ul className="sideBar_list">
          <Li>내 정보</Li>
          <Li>주문 내역</Li>
          <Li>장바구니 정보</Li>
        </Ul>
      </div>
      <div className="contents" style={{ flex: 1, padding: '50px' }}>
        <h1>주문 내역</h1>
        <Calendar />
        <OrderList />
      </div>
    </div>
  )
}

export default MyPage
