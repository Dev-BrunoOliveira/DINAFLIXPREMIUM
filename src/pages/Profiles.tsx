import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import type { UserProfile } from '../context/UserContext';
import './Profiles.css';

export default function Profiles() {
  const { profiles, setActiveProfile, updateProfileAvatar, updateProfileName } = useUser();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  const handleSelectProfile = (profile: UserProfile) => {
    if (isEditing) {
      setSelectedProfileId(profile.id);
      fileInputRef.current?.click();
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setActiveProfile(profile);
      navigate('/');
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedProfileId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateProfileAvatar(selectedProfileId, base64String);
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="profiles-container">
      {isLoading && (
        <div className="profile-loading-overlay">
          <div className="netflix-spinner"></div>
        </div>
      )}
      <div className="profiles-header">
        <img src="/IMG/LOGO/D_Prancheta 1.png" alt="Logo" className="profiles-logo" />
      </div>
      <div className="profiles-content">
        <h1>{isEditing ? 'Gerenciar perfis' : 'Quem está assistindo?'}</h1>
        
        <input 
          type="file" 
          accept="image/*" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange} 
        />

        <div className="profiles-list">
          {profiles.map(profile => (
            <div key={profile.id} className="profile-card" onClick={() => handleSelectProfile(profile)}>
              <div className="profile-avatar-wrapper">
                <img 
                  src={profile.avatar} 
                  alt={profile.name} 
                  className={`profile-avatar ${isEditing ? 'editing' : ''}`} 
                />
                {isEditing && (
                  <div className="edit-overlay">
                    <span className="edit-icon">✏️</span>
                  </div>
                )}
              </div>
              {isEditing ? (
                <input 
                  type="text" 
                  className="profile-name-edit" 
                  value={profile.name} 
                  onChange={(e) => updateProfileName(profile.id, e.target.value)}
                  onClick={(e) => e.stopPropagation()} 
                />
              ) : (
                <span className="profile-name">{profile.name}</span>
              )}
            </div>
          ))}
        </div>
        <button 
          className={`manage-profiles-btn ${isEditing ? 'done-btn' : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Concluído' : 'Gerenciar perfis'}
        </button>
      </div>
    </div>
  );
}
