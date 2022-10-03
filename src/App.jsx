import React, { useState, useEffect } from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { PatientList } from './components/PatientList'

export const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const newPacientes = pacientes.filter(item => item.id !== id);
    setPacientes(newPacientes);
  }
  
  useEffect(() => {
    const getLocal = () => {
      const patients = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(patients);
    }
    getLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);


  return (
    <div className='container mx-auto mt-20'>
        <Header />
        <div className='mt-12 md:flex'>
          <Form 
            setPacientes={setPacientes}
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <PatientList 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
    </div>
  )
}
