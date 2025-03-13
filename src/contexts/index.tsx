// Re-exportando todos os contexts de um único arquivo
export { AuthProvider, useAuth, useClienteLogado, useCantinaLogada } from './AuthContext';
export { ThemeProvider, useTheme } from '../themes/ThemeContext';
export { ClienteProvider } from './ClienteContext';
export { CantinaProvider } from './CantinaContext';
