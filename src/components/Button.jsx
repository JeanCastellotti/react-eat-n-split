function Button({ children, onClick }) {
  return (
    <button
      className="rounded bg-orange-300 px-3 py-1.5 font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
