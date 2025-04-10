import React, { useState } from 'react';
import UserView from './components/UserView';
import TechnicianView from './components/TechnicianView';

const App = () => {
  const [isTechnician, setIsTechnician] = useState(false);

  return (
    <div>
      {isTechnician ? (
        <TechnicianView />
      ) : (
        <UserView />
      )}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsTechnician(!isTechnician)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          Cambiar a {isTechnician ? 'Usuario' : 'Técnico'}
        </button>
      </div>
    </div>
  );
};

export default App;

// DONE