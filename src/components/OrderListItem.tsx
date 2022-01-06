import React from 'react'

const OrderListItem = () => {
  return (
    <>
      <tr>
        <td rowSpan={3}>2022010512345</td>
        <td>[마이쉐프] 헬케이노 국물닭발</td>
        <td>1300</td>
        <td>3개</td>
        <td rowSpan={3}>3900원</td>
        <td rowSpan={3}>2021년 3월 2일</td>
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
    </>
  )
}

export default OrderListItem
