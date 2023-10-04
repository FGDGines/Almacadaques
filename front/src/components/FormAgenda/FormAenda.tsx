import React, { useState } from 'react';


import './FormAgenda.css'
const FormAgenda: React.FC = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    actividad: '',
    fechaInicio: '',
    fechaFin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Datos enviados:', formData);
  };


  return (
    <div className='FormAgenda'>
      <h1>Inscribirse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="actividad">Actividad:</label>
          <select
            id="actividad"
            name="actividad"
            required
            value={formData.actividad}
            onChange={handleChange}
          >
            <option value="">Selecciona una actividad</option>
            <option value="Reunión">Reunión</option>
            <option value="Presentación">Presentación</option>
            <option value="Taller">Taller</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
        <div>
          <label htmlFor="fechaInicio">Fecha de Inicio:</label>
          <input
            type="datetime-local"
            id="fechaInicio"
            name="fechaInicio"
            required
            value={formData.fechaInicio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de Fin:</label>
          <input
            type="datetime-local"
            id="fechaFin"
            name="fechaFin"
            required
            value={formData.fechaFin}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default FormAgenda;
