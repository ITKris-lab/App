import React from 'react';
import StatusBadge from './StatusBadge';

const OrderCard = ({ order, onAction, isTechnician }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{order.requesterName}</h3>
          <StatusBadge status={order.status} />
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Área:</span> {order.area}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-medium">Trabajo:</span> {order.workType} - {order.activityType}
          </p>
          <p className="mt-1 text-sm text-gray-700">{order.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xs text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>
          {isTechnician && order.status !== 'realizado' && (
            <button
              onClick={() => onAction(order)}
              className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {order.status === 'enviado' ? 'Tomar orden' : 'Completar'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;