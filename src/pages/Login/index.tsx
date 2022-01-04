import React, { useState } from 'react'
import { login } from '../../api'
import useInput from '../../hooks/useInput'
import AuthTemplate from '../../templates/AuthTemplate'

const Login = () => {
  const [data, onChangeData] = useInput({
    businessNumber: '',
    password: '',
  })
  const onSubmit = async (e: any) => {
    e.preventDefault()
    console.log(data)
    const response = await login(data)
    if (response === true) {
      console.log('성공')
    } else {
      console.log('실패')
    }

    console.log('data : ', response)
  }
  return (
    <AuthTemplate title="로그인">
      <table>
        <tbody>
          <tr>
            <td>사업자 번호</td>
            <td>
              <input
                type="text"
                name="businessNumber"
                onChange={onChangeData}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="password" onChange={onChangeData} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={onSubmit}>버튼</button>
            </td>
          </tr>
        </tbody>
      </table>
    </AuthTemplate>
  )
}

export default Login
