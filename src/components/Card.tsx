import React from 'react'

interface CardProps {
  id:number;
  width:string;
  title:string;
  price:number;
  
}

const Card = () => {
  return (
    <div style={{ width: '250px' }}>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', right: '10px', bottom: '10px' }}>
          아이콘
        </span>
        <img src="http://via.placeholder.com/250x320" />
      </div>
      <div>
        <div
          style={{ marginTop: '15px', fontSize: '16px', marginBottom: '10px' }}
        >
          [마이쉐프] 헬케이노 국물닭발
        </div>
        <div style={{ fontSize: '16px', fontWeight: 800 }}>3,5000 원</div>
        <div style={{ fontSize: '13px', color: '#999' }}>
          자꾸 손이가는 화끈한 맛
        </div>
      </div>
    </div>
  )
}

export default Card
