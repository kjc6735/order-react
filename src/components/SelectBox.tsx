import React from 'react'
import styled from '@emotion/styled'
import { Group } from '../types'
import { Label } from '../pages/Register/styles'

interface SelectBoxProps {
  groups: Group[]
  onChangeCheckedGroup: any
  checked: any
}

const SelectBox = ({
  groups,
  onChangeCheckedGroup,
  checked,
}: SelectBoxProps) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: '3px',
      }}
    >
      {groups.map((item: Group) => (
        <Label
          key={item.id}
          style={{ flex: 1, padding: '0.8rem', textAlign: 'center' }}
          active={checked === item.id ? true : false}
        >
          <input
            type="radio"
            name="group"
            value={item.id}
            key={item.id.toString()}
            id={item.name}
            style={{ display: 'none' }}
          />
          <label
            htmlFor={item.name}
            onClick={() => {
              onChangeCheckedGroup(item.id)
              console.log('clicked ', item.id)
            }}
          >
            {item.name}
          </label>
        </Label>
      ))}
    </div>
  )
}
export default SelectBox
