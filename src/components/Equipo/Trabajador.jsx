import { destaqueDeEquipo } from '../../const/const'
export function Trabajador({ trabajador }) {
  return (
    <article className='w-80 overflow-hidden bg-white rounded-xl shadow-md flex flex-col min-w-[250px]'>
      <div
        className={`${destaqueDeEquipo[trabajador.equipo]} w-full h-36`}></div>
      <div>
        <img
          src={trabajador.foto}
          alt={`Foto de ${trabajador.nombre}`}
          className='z-10 w-32 h-32 relative mt-[-75px] mx-auto rounded-full border-white border-4'
        />
      </div>
      <div className='py-10 '>
        <p className='text-lg font-semibold text-blue-700 text-center mb-2'>
          {trabajador.nombre}
        </p>
        <p className='text-center '>{trabajador.puesto}</p>
      </div>
    </article>
  )
}

export default Trabajador
