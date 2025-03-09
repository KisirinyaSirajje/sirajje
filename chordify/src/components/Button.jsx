const Button = ({ onClick, children, color = 'teal', type = 'submit' }) => {
  const buttonStyles = {
    'teal': 'bg-teal-600 hover:bg-teal-700 text-white',
    'teal-light': 'bg-teal-500 hover:bg-teal-600 text-white'
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonStyles[color]} px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg`}
    >
      {children}
    </button>
  )
}

export default Button
