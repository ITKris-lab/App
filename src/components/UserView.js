import React, { useState } from 'react';
import { mockOrders } from '../mock/data';
import LayoutHeader from './LayoutHeader';
import OrderForm from './OrderForm';
import OrderCard from './OrderCard';

const UserView = () => {
  const [orders, setOrders] = useState(mockOrders.filter(order => order.status !== 'realizado'));
  const [view, setView] = useState('form'); // 'form' or 'list'

  const handleSubmitOrder = (newOrder) => {
    const order = {
      ...newOrder,
      id: orders.length + 1,
      status: 'enviado',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setOrders([order, ...orders]);
    setView('list');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader title="Solicitud de Mantenimiento" />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {view === 'form' ? (
          <div className="space-y-6">
            <OrderForm onSubmit={handleSubmitOrder} />
            <button
              onClick={() => setView('list')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700"
            >
              Ver mis solicitudes
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Mis Solicitudes</h2>
              <button
                onClick={() => setView('form')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
              >
                Nueva Solicitud
              </button>
            </div>
            <div className="space-y-4">
              {orders.map(order => (
                <OrderCard key={order.id} order={order} isTechnician={false} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserView;