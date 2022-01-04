import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: #333;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`
export const Td = styled.td`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 20px;
`

export const Table = styled.table`
  width: 100%;
  padding: 20px;
`
export const Tr = styled.tr``
export const Button = styled.button`
  background: #fff;
  color: #ffa000;
  border-radius: 3px;
  border: 1px solid #ffa000;
  font-size: 13px;
  padding: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;

  &:hover {
    background: #ffa000;
    color: #fff;
  }
`

export const Label = styled.div<{ active: boolean }>`
  ${(props) =>
    props.active &&
    css`
      background: #ffa000;
      color: #fff;
      border-radius: 3px;
    `}
`
