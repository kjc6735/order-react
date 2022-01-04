import React, { useState } from 'react'

const useInput = (initialState?: any) => {
  const [value, setValue] = useState(initialState)
  const onChangeInput = (e: any) => {
    console.log('test')
    console.log(`${e.target.name}  ${e.target.value}`)
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return [value, onChangeInput]
}

export default useInput
