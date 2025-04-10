import React from 'react';
import { activityTypes } from '../mock/data';

const ActivityTypeSelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="activityType" className="block text-sm font-medium text-gray-700">
        Tipo de Actividad
      </label>
      <select
        id="activityType"
        name="activityType"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
      >
        <option value="">Seleccione una actividad</option>
        {activityTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActivityTypeSelect;