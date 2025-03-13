# Configuração do Ambiente Android para Expo

## Resolver incompatibilidade de versões do ADB

O erro "adb server version (41) doesn't match this client (36)" ocorre quando você tem múltiplas instalações do Android SDK. Para resolver:

1. Feche todas as instâncias do Android Studio e emuladores
2. Adicione a pasta correta do Android SDK ao PATH:
   - Localize a pasta onde o Android SDK está instalado (geralmente em `C:\Users\<seu-usuario>\AppData\Local\Android\Sdk\platform-tools`)
   - Certifique-se que esta pasta está no PATH do sistema e que não há outras pastas do Android SDK

## Corrigir dependências do projeto

Execute o comando para corrigir automaticamente as dependências:

```bash
npm run doctor
```

Isso irá executar `npx expo doctor --fix-dependencies` e corrigir a versão do React Native.

## Certificar que o emulador Android está configurado

1. Abra o Android Studio
2. Vá para "Device Manager" (ou "AVD Manager")
3. Crie um novo dispositivo virtual se você não tiver um
4. Inicie o emulador manualmente antes de executar o projeto

## Executar o projeto

```bash
# Primeiro, inicie o emulador Android manualmente
# Depois execute o projeto
npm run android
```

Se você preferir usar um dispositivo físico:
1. Ative o modo de desenvolvedor no dispositivo Android
2. Conecte via cabo USB e ative a depuração USB
3. Execute o comando `adb devices` para verificar se o dispositivo é reconhecido
4. Execute `npm run android` para abrir o app no dispositivo

## Alternativa: Use o Expo Go no seu smartphone

1. Instale o aplicativo Expo Go da Play Store
2. Execute `npm start` para iniciar o servidor Metro
3. Escaneie o QR code com o aplicativo Expo Go
