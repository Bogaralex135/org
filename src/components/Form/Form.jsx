import { useState } from 'react'
import Input from './input'
import Select from './Select'
import Button from './Button'

export function Form({ registrarTrabajador }) {
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')

  function generarID() {
    let random = Math.random().toString(36).substring(2)
    let fecha = new Date().getTime()
    return random + fecha
  }

  function handleSubmit(e) {
    e.preventDefault()

    let trabajador = {
      id: generarID(),
      nombre,
      puesto,
      foto,
      equipo,
    }

    registrarTrabajador(trabajador)
  }

  return (
    <section className='flex justify-center my-20 '>
      <form
        action=''
        onSubmit={handleSubmit}
        className='bg-gray-200 max-w-[80%] shadow-md shadow-[rgba(0,0,0,0.2)] rounded-xl py-2 px-28'>
        <h2 className='font-Prata font-normal text-3xl my-6'>
          Rellena el formulario para crear el colaborador.
        </h2>
        <Input
          label='Nombre'
          type='text'
          placeHolder='Ingrese su nombre'
          required
          setValue={setNombre}
          value={nombre}
        />
        <Input
          label='Puesto'
          type='text'
          placeHolder='Ingrese su nombre'
          required
          setValue={setPuesto}
          value={puesto}
        />
        <Input
          label='Foto'
          type='url'
          placeHolder='Ingrese enlace de foto'
          pattern='https://.*'
          required
          setValue={setFoto}
          value={foto}
        />
        <Select setValue={setEquipo} value={equipo} />
        <Button>Crear</Button>
      </form>
    </section>
  )
}

export default Form
