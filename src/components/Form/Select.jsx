import { equipos } from '../../const/const'
export function Select({ setValue, value }) {
  return (
    <div className='my-6'>
      <label htmlFor='equipo' className='text-lg font-semibold block mb-4'>
        Equipo
      </label>
      <select
        id='equipo'
        value={value}
        onChange={e => setValue(e.target.value)}
        className='w-full bg-white shadow-lg py-5 px-5 border-none outline-blue-700'>
        <option value='' disabled defaultValue='' hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo.nombre}>
            {equipo.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
