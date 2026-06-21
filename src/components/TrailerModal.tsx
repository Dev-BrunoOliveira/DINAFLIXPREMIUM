import { useEffect } from 'react';
import './TrailerModal.css';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function TrailerModal({ isOpen, onClose, videoSrc }: TrailerModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="netflix-modal-overlay" onClick={onClose}>
      <div className="netflix-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="netflix-modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="netflix-modal-video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src={videoSrc}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
