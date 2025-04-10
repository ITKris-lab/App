import React from 'react';
import StatusBadge from './StatusBadge';

const OrderDetails = ({ order }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Orden #{order.id} - {order.requesterName}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {order.area} • {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
          <StatusBadge status={order.status} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Tipo de Trabajo</h4>
            <p className="mt-1 text-sm text-gray-900">{order.workType}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Tipo de Actividad</h4>
            <p className="mt-1 text-sm text-gray-900">{order.activityType}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-500">Descripción</h4>
          <p className="mt-1 text-sm text-gray-900">{order.description}</p>
        </div>

        {order.status === 'realizado' && (
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Evidencia Fotográfica</h4>
              {order.photo && (
                <img 
                  src={order.photo} 
                  alt="Evidencia" 
                  className="mt-2 rounded-md border border-gray-300 max-h-40"
                />
              )}
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Firma del Solicitante</h4>
              {order.signature && (
                <img 
                  src={order.signature} 
                  alt="Firma" 
                  className="mt-2 border border-gray-300 h-20"
                />
              )}
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Completado el</h4>
              <p className="mt-1 text-sm text-gray-900">
                {new Date(order.completedAt).toLocaleString()} por {order.technician}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;