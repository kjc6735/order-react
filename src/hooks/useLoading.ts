import React, { useState } from 'react'

const useLoading = (initialState: any) => {
  const [value, setValue] = useState(initialState)
  const onChangeLoading = (name: string, v: boolean) => {
    console.log(`${[name]}`)
    setValue({ ...value, [name]: v })
  }
  return [value, onChangeLoading]
}
export default useLoading
