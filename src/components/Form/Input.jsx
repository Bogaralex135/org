export function Input({
  label,
  type,
  placeHolder,
  pattern,
  required,
  setValue,
  value,
}) {
  return (
    <div className='my-6 '>
      <label htmlFor={label} className='text-lg font-semibold block mb-4'>
        {label}
      </label>
      <input
        className='w-full bg-white shadow-lg py-5 px-5 outline-blue-700  '
        type={type}
        id={label}
        placeholder={placeHolder}
        pattern={pattern}
        required={required}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default Input
