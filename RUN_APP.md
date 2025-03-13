# Como Executar o App Tá Pronto

## Método 1: Usando Expo Go (Recomendado para desenvolvimento)

Este é o modo mais fácil para desenvolvimento rápido:

1. Instale o aplicativo Expo Go no seu smartphone Android/iOS
2. Execute o servidor de desenvolvimento:
   ```bash
   npm run start
   ```
3. Escaneie o QR code com:
   - **Android**: App Expo Go
   - **iOS**: Câmera do iPhone

## Método 2: Criando e instalando um build de desenvolvimento

Use este método se precisar de módulos nativos personalizados ou quiser testar o app como um APK nativo:

```bash
# 1. Cria os arquivos nativos (Android/iOS)
npm run prebuild

# 2. Compila e instala no dispositivo/emulador Android
npm run build:android

# 3. Depois de instalado, inicie o servidor de desenvolvimento
npm run dev-client
```

## Método 3: Usando emulador Android

Para testar no emulador Android:

1. Abra o Android Studio e inicie um emulador
2. Execute:
   ```bash
   npm run android
   ```

## Solução de problemas

### Erro de ADB
Se encontrar problemas com o ADB, execute:
```bash
fix-adb.bat
```

### Dependências incompatíveis
Se encontrar problemas com dependências:
```bash
npm run fix-deps
```

### Limpeza completa
Para uma limpeza completa:
```bash
npm run clean
npm cache clean --force
rm -rf node_modules
npm install
```
