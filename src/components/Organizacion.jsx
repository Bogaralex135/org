export function Organizacion({ setShowForm, showForm }) {
  function handleClick() {
    setShowForm(!showForm)
  }
  return (
    <section className='w-full grid justify-items-center pt-5'>
      <p className='border-b-4 p-4 border-blue-700 text-blue-700 text-5xl font-Prata'>
        Mi Organizacion
      </p>
      <button onClick={handleClick} className='justify-self-end'>
        <img src='/img/ButtonShowForm.png' alt='' />
      </button>
    </section>
  )
}

export default Organizacion
