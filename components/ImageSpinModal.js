import { useState, useRef } from 'react';

export default function ImageSpinModal({ image, onClose }) {
  const [spinning, setSpinning] = useState(false);
  const imgRef = useRef(null);

  const handleStartSpin = () => {
    if (imgRef.current) {
      imgRef.current.classList.remove('animate-spin360-once'); // restart if already spun
      void imgRef.current.offsetWidth; // force reflow
      imgRef.current.classList.add('animate-spin360-once');
      setSpinning(true);
    }
  };

  const handleAnimationEnd = () => {
    setSpinning(false); // reset state if needed
    if (imgRef.current) {
      imgRef.current.classList.remove('animate-spin360-once');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative w-[90%] max-w-xl text-center">
        <img
          ref={imgRef}
          src={image}
          alt="Product"
          onAnimationEnd={handleAnimationEnd}
          className="w-full max-h-[500px] object-contain mx-auto"
        />

        <div className="flex justify-between mt-4">
          <button
            onClick={handleStartSpin}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Start 360° View
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
          >
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  );
}
