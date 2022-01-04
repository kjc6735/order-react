import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const Home = () => {
  return (
    <div style={{}}>
      <header
        style={{
          textAlign: 'center',
          background: '',
          width: '70%',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'right', padding: '10px' }}>
          <Link to="">로그아웃 </Link>
          <Link to="profile"> 내정보</Link>
          <Link to="mypage">마이페이지</Link>
        </div>
        <img src="http://via.placeholder.com/200x150" />
      </header>
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '250px 250px 250px 250px',
            margin: '0 auto',
            width: '70%',
            justifyContent: 'space-between',
            rowGap: '1rem',
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
/**
 * 
 * 
 * display: 'flex',
            justifyContent: 'space-between',
            width: '70%',
            flexFlow: 'row wrap',
            margin: '0 auto',
 */
