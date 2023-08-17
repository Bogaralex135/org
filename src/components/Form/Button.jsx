export function Button({ children }) {
  return (
    <button
      type='submit'
      className='bg-blue-700 text-white py-4 px-10 rounded-md mb-5 hover:text-green-600'>
      {children}
    </button>
  )
}

export default Button
