import React from 'react'
import Paragraph from "../paragraph/Paragraph"

let changingText = 'meh'
const onClick = cb => {
  changingText = 'CHANGED'
  cb()
}

export default props => {
  return (
    <button onClick={() => onClick(props.onClick)}>
      {changingText}
      <Paragraph/>
    </button>
  )
}