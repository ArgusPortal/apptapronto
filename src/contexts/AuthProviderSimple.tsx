import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipo simplificado para ajudar no diagnóstico
type SimpleAuthContextType = {
  user: any | null;
  signIn: () => void;
  signOut: () => void;
};

const SimpleAuthContext = createContext<SimpleAuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const SimpleAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  
  const signIn = () => {
    console.log("Simulando login");
    setUser({ id: "123", name: "Usuário Teste" });
  };
  
  const signOut = () => {
    console.log("Simulando logout");
    setUser(null);
  };
  
  return (
    <SimpleAuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </SimpleAuthContext.Provider>
  );
};

export const useSimpleAuth = () => useContext(SimpleAuthContext);
