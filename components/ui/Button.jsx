import React from 'react'

const Button = ({value}) => {
  return (
<button type="button"
className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300">{value}</button>
  )
}

export default Button
