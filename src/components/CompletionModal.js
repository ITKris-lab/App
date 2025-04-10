import React, { useState } from 'react';
import SignatureModal from './SignatureModal';
import PhotoUploader from './PhotoUploader';

const CompletionModal = ({ order, onComplete, onClose }) => {
  const [signature, setSignature] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  const handleComplete = () => {
    if (signature && photo) {
      onComplete({
        signature,
        photo,
        completedAt: new Date().toISOString()
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Completar Orden #{order.id}</h3>
          <p className="mt-1 text-sm text-gray-500">{order.workType} - {order.activityType}</p>
          
          <PhotoUploader onPhotoTaken={setPhoto} />
          
          <div className="mt-4">
            <button
              onClick={() => setShowSignatureModal(true)}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
            >
              Capturar Firma del Solicitante
            </button>
          </div>

          {signature && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700">Firma capturada</p>
              <img 
                src={signature} 
                alt="Firma" 
                className="h-16 mt-1 border border-gray-300"
              />
            </div>
          )}

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleComplete}
              disabled={!signature || !photo}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${(!signature || !photo) ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
            >
              Finalizar Orden
            </button>
          </div>
        </div>
      </div>

      {showSignatureModal && (
        <SignatureModal
          onSave={(sig) => {
            setSignature(sig);
            setShowSignatureModal(false);
          }}
          onClose={() => setShowSignatureModal(false)}
        />
      )}
    </div>
  );
};

export default CompletionModal;