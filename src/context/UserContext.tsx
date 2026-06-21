import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

interface UserContextData {
  activeProfile: UserProfile | null;
  setActiveProfile: (profile: UserProfile | null) => void;
  profiles: UserProfile[];
  updateProfileAvatar: (id: string, newAvatar: string) => void;
  updateProfileName: (id: string, newName: string) => void;
}

const defaultProfiles: UserProfile[] = [
  { id: '1', name: 'Bruno', avatar: '/IMG/LOGO/LOGOUSUARIO.png' },
  { id: '2', name: 'Convidado', avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
  { id: '3', name: 'Infantil', avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' },
];

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>(defaultProfiles);

  const updateProfileAvatar = (id: string, newAvatar: string) => {
    setProfiles(prevProfiles =>
      prevProfiles.map(p => p.id === id ? { ...p, avatar: newAvatar } : p)
    );
    if (activeProfile && activeProfile.id === id) {
      setActiveProfile(prev => prev ? { ...prev, avatar: newAvatar } : null);
    }
  };

  const updateProfileName = (id: string, newName: string) => {
    setProfiles(prevProfiles =>
      prevProfiles.map(p => p.id === id ? { ...p, name: newName } : p)
    );
    if (activeProfile && activeProfile.id === id) {
      setActiveProfile(prev => prev ? { ...prev, name: newName } : null);
    }
  };

  return (
    <UserContext.Provider value={{ activeProfile, setActiveProfile, profiles, updateProfileAvatar, updateProfileName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
