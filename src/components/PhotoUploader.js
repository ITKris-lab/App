import React, { useState, useRef } from 'react';

const PhotoUploader = ({ onPhotoTaken }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onPhotoTaken(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mt-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment"
        className="hidden"
      />
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={triggerFileInput}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
        >
          Tomar Foto
        </button>
        {preview && (
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="h-16 w-16 object-cover rounded-md border border-gray-300"
            />
          </div>
        )}
      </div>
      <p className="mt-1 text-xs text-gray-500">
        Foto de evidencia del trabajo realizado
      </p>
    </div>
  );
};

export default PhotoUploader;