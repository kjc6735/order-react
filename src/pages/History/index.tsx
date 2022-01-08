import _, { uniqBy } from 'lodash'
import React, { useEffect, useState } from 'react'

const History = () => {
  const data = [
    { id: 1, text: 'test1' },
    { id: 2, text: 'test2' },
    { id: 2, text: 'test2' },
    { id: 3, text: 'test3' },
    { id: 4, text: 'test4' },
  ]
  const [d, setD] = useState()
  useEffect(() => {})
  return (
    <div>
      {data.map((item) => (
        <div>
          {item.id} {item.text}{' '}
        </div>
      ))}
    </div>
  )
}

export default History
