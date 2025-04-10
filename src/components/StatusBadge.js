import React from 'react';

const statusColors = {
  enviado: 'bg-blue-100 text-blue-800',
  en_proceso: 'bg-yellow-100 text-yellow-800',
  realizado: 'bg-green-100 text-green-800'
};

const statusLabels = {
  enviado: 'Enviado',
  en_proceso: 'En Proceso',
  realizado: 'Realizado'
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;