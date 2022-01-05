import React from 'react'

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
          <td>상태</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={3}>2022010512345</td>
          <td>[마이쉐프] 헬케이노 국물닭발</td>
          <td>1300</td>
          <td>3개</td>
          <td rowSpan={3}>3900원</td>
          <td rowSpan={3}>배송 완료</td>
        </tr>
        <tr>
          <td>[마이쉐프] 헬케이노 국물닭발</td>
          <td>1300</td>
          <td>3개</td>
        </tr>
        <tr>
          <td>[마이쉐프] 헬케이노 국물닭발</td>
          <td>1300</td>
          <td>3개</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderList
