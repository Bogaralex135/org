import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form/Form'
import Organizacion from './components/Organizacion'
import Equipo from './components/Equipo/Equipo'
import { equipos } from './const/const'
import Footer from './components/Footer'

function App() {
  const [showForm, setShowForm] = useState(true)
  const [trabajadores, setTrabajadores] = useState([])

  function registrarTrabajador(trabajador) {
    console.log(trabajadores)
    setTrabajadores([...trabajadores, trabajador])
  }

  return (
    <>
      <Header />
      <main className='font-Montserrat'>
        {showForm && <Form registrarTrabajador={registrarTrabajador} />}
        <Organizacion setShowForm={setShowForm} showForm={showForm} />
        {equipos.map((equipo, index) => (
          <Equipo
            key={index}
            equipo={equipo}
            trabajadores={trabajadores.filter(
              trabajador => trabajador.equipo === equipo.nombre
            )}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
