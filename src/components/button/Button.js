import React from 'react'
import Paragraph from "../paragraph/Paragraph"

let changingText = 'meh'
const onClick = () => {
  changingText = 'CHANGED'
}

export default () => {
  return (
    <button onClick={() => onClick()}>
      {changingText}
      <Paragraph/>
    </button>
  )
}