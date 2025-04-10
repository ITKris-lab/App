import React from 'react';
import { workTypes } from '../mock/data';

const WorkTypeSelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="workType" className="block text-sm font-medium text-gray-700">
        Tipo de Trabajo
      </label>
      <select
        id="workType"
        name="workType"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
      >
        <option value="">Seleccione un tipo</option>
        {workTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkTypeSelect;