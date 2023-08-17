import { Trabajador } from './Trabajador'
export function Equipo({ trabajadores, equipo }) {
  if (trabajadores.length > 0) {
    return (
      <section
        className={`w-full  py-12 px-20 text-center ${equipo.colorPrimario}`}>
        <h2
          className={`text-4xl font-Prata font-normal border-b-4 ${equipo.colorBorde} inline`}>
          {equipo.nombre}
        </h2>

        <div className='flex gap-8 justify-center mt-12 flex-wrap'>
          {trabajadores.map(trabajador => (
            <Trabajador key={trabajador.id} trabajador={trabajador} />
          ))}
        </div>
      </section>
    )
  }
}

export default Equipo
