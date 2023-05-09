import React from "react"

const Button = ({ children }) => {
  return (
    <button className="py-2 px-4 bg-blue-500 text-white font-poppins font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
      {children}
    </button>
  )
}

export default Button
