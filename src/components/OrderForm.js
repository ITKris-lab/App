import React, { useState } from 'react';
import WorkTypeSelect from './WorkTypeSelect';
import ActivityTypeSelect from './ActivityTypeSelect';

const OrderForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    area: '',
    workType: '',
    activityType: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      requesterName: '',
      area: '',
      workType: '',
      activityType: '',
      description: ''
    });
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Nueva Solicitud</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="requesterName" className="block text-sm font-medium text-gray-700">
              Nombre del solicitante
            </label>
            <input
              type="text"
              name="requesterName"
              id="requesterName"
              required
              value={formData.requesterName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700">
              Área de servicio
            </label>
            <input
              type="text"
              name="area"
              id="area"
              required
              value={formData.area}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <WorkTypeSelect 
            value={formData.workType}
            onChange={handleChange}
          />
          <ActivityTypeSelect 
            value={formData.activityType}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción del problema
            </label>
            <textarea
              name="description"
              id="description"
              rows={3}
              required
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;