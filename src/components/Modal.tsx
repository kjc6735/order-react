import React from 'react'

const Modal = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#eee',
        opacity: '60%',
      }}
    >
      <div style={{ opacity: '100%' }}>
        <div>주문하시겠습니까?</div>
        <div>내용내용</div>
        <div>
          <button>확인</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
