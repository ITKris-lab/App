import React, { useState } from 'react';
import { mockOrders, mockTechnicians } from '../mock/data';
import LayoutHeader from './LayoutHeader';
import OrdersTable from './OrdersTable';
import CompletionModal from './CompletionModal';
import OrderDetails from './OrderDetails';

const TechnicianView = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentTechnician] = useState(mockTechnicians[0].name);
  const [view, setView] = useState('list'); // 'list' or 'detail'

  const handleTakeOrder = (order) => {
    const updatedOrders = orders.map(o => 
      o.id === order.id 
        ? { ...o, status: 'en_proceso', technician: currentTechnician, updatedAt: new Date().toISOString() }
        : o
    );
    setOrders(updatedOrders);
  };

  const handleCompleteOrder = (order) => {
    setSelectedOrder(order);
    setShowCompletionModal(true);
  };

  const handleSaveCompletion = (completionData) => {
    const updatedOrders = orders.map(o => 
      o.id === selectedOrder.id 
        ? { 
            ...o, 
            status: 'realizado',
            ...completionData,
            updatedAt: new Date().toISOString()
          } 
        : o
    );
    setOrders(updatedOrders);
    setSelectedOrder(null);
    setShowCompletionModal(false);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setView('detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader title="Panel de Técnico" />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {view === 'list' ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Órdenes de Trabajo</h2>
              <p className="mt-1 text-sm text-gray-500">
                Gestiona todas las solicitudes de mantenimiento
              </p>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <OrdersTable 
                orders={orders} 
                isTechnician={true} 
                onAction={(order) => {
                  if (order.status === 'enviado') {
                    handleTakeOrder(order);
                  } else if (order.status === 'en_proceso') {
                    handleCompleteOrder(order);
                  }
                }}
                onViewDetails={handleViewDetails}
              />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setView('list')}
              className="mb-4 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-black hover:bg-gray-800"
            >
              ← Volver al listado
            </button>
            <OrderDetails order={selectedOrder} />
          </>
        )}
      </main>

      {showCompletionModal && (
        <CompletionModal
          order={selectedOrder}
          onComplete={handleSaveCompletion}
          onClose={() => setShowCompletionModal(false)}
        />
      )}
    </div>
  );
};

export default TechnicianView;