import React, { useContext, useState, createContext, ReactNode } from 'react';
import { AuthError, onAuthStateChanged, User } from 'firebase/auth';
import { useSignInWithEmailAndPassword, useSignOut, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../api/config/firebaseConfig';
import InitialLoading from '../components/Common/LoadingSpinner';

// Definindo os tipos
type UserContextType = {
    user: User | undefined | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
    error: AuthError | undefined;
    sendPasswordResetEmailError: boolean;
    sendPasswordReset: (email: string) => void;
    clienteLogado: boolean;
    setClienteLogado: (clienteLogado: boolean) => void;
    cantinaLogada: boolean;
    setCantinaLogada: (cantinaLogada: boolean) => void;
};

interface AuthProviderProps {
    children: ReactNode;
}

// Criando o contexto com valores padrão
const AuthContext = createContext<UserContextType>({
    user: undefined,
    signIn: async () => { },
    signOut: async () => { },
    loading: false,
    error: undefined,
    sendPasswordReset: () => { },
    sendPasswordResetEmailError: false,
    clienteLogado: false,
    setClienteLogado: () => { },
    cantinaLogada: false,
    setCantinaLogada: () => { }
});

// Hook personalizado para usar o contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};

export const useClienteLogado = () => {
    return useAuth().clienteLogado;
};

export const useCantinaLogada = () => {
    return useAuth().cantinaLogada;
};

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    console.log("AuthProvider inicializado"); // Debugging log
    
    const [clienteLogado, setClienteLogado] = useState<boolean>(false);
    const [cantinaLogada, setCantinaLogada] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);
    const [signInWithEmailAndPassword, credentials, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const [sendPasswordResetEmail, sendPasswordResetEmailError] = useSendPasswordResetEmail(auth);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(email, password);
    };

    const signOutApp = async () => {
        await signOut();
    };

    const sendPasswordReset = (email: string) => {
        return sendPasswordResetEmail(email);
    };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log("Auth state changed:", user ? "logged in" : "logged out");
        });
        return unsubscribe;
    }, []);

    if (signOutLoading) {
        return <InitialLoading />;
    }

    const value = {
        clienteLogado, 
        setClienteLogado, 
        cantinaLogada, 
        setCantinaLogada, 
        user: currentUser, 
        signIn, 
        signOut: signOutApp, 
        loading, 
        error, 
        sendPasswordReset, 
        sendPasswordResetEmailError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Re-exportando o contexto para compatibilidade
export { AuthContext };