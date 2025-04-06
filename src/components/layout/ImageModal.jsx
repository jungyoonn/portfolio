import React from 'react';
import '../../css/image-modal.css';

const ImageModal = ({ image, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        <img src={image} alt={alt} className="image-modal-img img-fluid" />
        <div className="image-modal-caption noto-sans-kr">{alt}</div>
      </div>
    </div>
  );
};

export default ImageModal;