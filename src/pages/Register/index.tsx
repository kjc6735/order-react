import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { addListener } from 'process'
import React, { useEffect, useState } from 'react'
import { fetchGroup, register } from '../../api'
import SelectBox from '../../components/SelectBox'
import useInput from '../../hooks/useInput'
import useLoading from '../../hooks/useLoading'
import AuthTemplate from '../../templates/AuthTemplate'
import { IUser } from '../../types'
import { Button, Input, Table, Td, Tr } from './styles'

interface InputProps {
  type: string
  placeholder: string
}

const Register = () => {
  const [inputs, onChangeInput] = useInput({
    name: '',
    password: '',
    passwordConfirm: '',
    groupId: '',
    phone: '',
    businessNumber: '',
  })

  const [loading, onChangeLoading] = useLoading({
    initialLoading: true,
    submitLoading: false,
  })
  const [group, setGroup] = useState([])
  const [error, setError] = useState<Error | string>()
  const [checked, setChecked] = useState(0)
  const [message, setMessage] = useState('')
  const onSubmit = async (e: any) => {
    e.preventDefault()
    if (inputs.password !== inputs.passwordConfirm) setError('오류임')
    const submitData: IUser = { ...inputs, groupId: checked }
    onChangeLoading('submitLoading', true)
    try {
      const success = await register(submitData)
      if (success.error === false) {
        setMessage(success.message)
      }
      onChangeLoading('submitLoading', false)
    } catch (e: any) {
      setError(e)
      onChangeLoading('submitLoading', false)
    } finally {
    }
    console.log(submitData)
  }

  useEffect(() => {
    const fetchGroupData = async () => {
      onChangeLoading('initialLoading', true)
      try {
        const data = await fetchGroup()
        console.log(data)
        setGroup(data)
        onChangeLoading('initialLoading', false)
      } catch (e) {
        console.log(e)
        onChangeLoading('initialLoading', false)
      } finally {
        onChangeLoading('initialLoading', false)
      }
    }
    fetchGroupData()
  }, [])

  if (loading.initialLoading === true) {
    return <div>loading...</div>
  }
  return (
    <AuthTemplate title="회원가입">
      <form onSubmit={onSubmit}>
        <Table>
          <tbody>
            <Tr>
              <Td>회사 이름</Td>
              <Td>
                <Input
                  type="text"
                  placeholder="회사 이름"
                  value={inputs.name}
                  onChange={onChangeInput}
                  name="name"
                />
              </Td>
            </Tr>

            <Tr>
              <Td>사업자 번호</Td>
              <Td>
                <Input
                  type="text"
                  placeholder="숫자만 입력해주세요"
                  value={inputs.businessNumber}
                  onChange={onChangeInput}
                  name="businessNumber"
                />
              </Td>
            </Tr>
            <Tr>
              <Td>그룹</Td>
              <Td>
                <SelectBox
                  groups={group}
                  onChangeCheckedGroup={setChecked}
                  checked={checked}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>휴대폰 번호</Td>
              <Td>
                <Input
                  type="text"
                  placeholder="숫자만 입력해주세요. ex) 01012341234"
                  value={inputs.phone}
                  onChange={onChangeInput}
                  name="phone"
                />
              </Td>
            </Tr>
            <Tr>
              <Td>비밀번호</Td>
              <Td>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={inputs.password}
                  onChange={onChangeInput}
                  name="password"
                />
              </Td>
            </Tr>
            <Tr>
              <Td>비밀번호 확인</Td>
              <Td>
                <Input
                  type="password"
                  placeholder="비밀번호와 같게 입력해주세요."
                  value={inputs.passwordConfirm}
                  onChange={onChangeInput}
                  name="passwordConfirm"
                />
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={2}>
                <Button onClick={onSubmit} disabled={loading.submitLoading}>
                  {loading.submitLoading ? '요청중..' : '회원가입'}
                </Button>
              </Td>
            </Tr>
          </tbody>
        </Table>
      </form>
      {message && <Message>{message}</Message>}
    </AuthTemplate>
  )
}

const Message = ({ children }: any) => {
  return <div>{children}</div>
}

export default Register

/*
  style 분리
  component 분리
  인풋박스 개별 컴포로 만들어서 사용 -> 리렌더링 방지
  커스텀 훅스 분ㄹ

*/
