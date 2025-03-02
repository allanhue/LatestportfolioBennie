import React from 'react'

const Button = ({text = 'Click Me'}) => {
  return (
    <button className="bg-green-500 text-green-500 px-4 py-2 rounded">
      {text}
    </button>
  )
}

export default Button
