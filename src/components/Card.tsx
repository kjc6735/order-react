import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
interface CardProps {
  id?: number
  width?: string
  title?: string
  price?: number
  description?: string
}

const Card = ({ id, width, title, price, description }: CardProps) => {
  return (
    <div style={{ width: '250px' }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: '#f9a825',
            opacity: '0.7',
            padding: '10px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RiShoppingCart2Line size={30} color="#fff" />
        </div>

        <img src="/product1.jpg" style={{ width: '100%' }} />
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
