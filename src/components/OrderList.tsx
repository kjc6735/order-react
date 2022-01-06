import React from 'react'
import OrderListItem from './OrderListItem'

const OrderList = () => {
  return (
    <table style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <td>주문번호</td>
          <td>주문 상품</td>
          <td>가격</td>
          <td>주문 갯수</td>
          <td>총 가격</td>
          <td>주문 날짜</td>
          <td>상태</td>
        </tr>
      </thead>
      <tbody>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </tbody>
    </table>
  )
}

export default OrderList
