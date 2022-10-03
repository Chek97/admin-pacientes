import React, { useEffect } from 'react'
import { Patient } from './Patient'

export const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {

  useEffect(() => {
    console.log('Nuevo paciente');
  }, []);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
        <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Administar tus {' '}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>
        {pacientes.map((paciente) => (
          <Patient paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} key={paciente.id} /> 
        ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes
            <span className='text-indigo-600 font-bold'>y Apareceran Aqui</span>
          </p>
        </>
      )}
    </div>
  )
}
