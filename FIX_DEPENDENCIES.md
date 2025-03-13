# Como corrigir dependências do App Tá Pronto

## Erro no comando expo doctor

Se você encontrou um erro ao executar `npx run expo-doctor --fix-dependencies`, é porque o comando está incorreto.

## Comandos corretos para resolver problemas de dependências

Execute estes comandos na ordem:

```bash
# 1. Limpe o cache do Expo/Metro
npm run clean

# 2. Corrija as dependências incompatíveis
npm run fix-deps

# 3. Instale as dependências que possam estar faltando
npm install
```

## Para configuração do Android/ADB

1. Certifique-se de que o Android Studio esteja instalado
2. Adicione a pasta platform-tools do Android SDK ao PATH do sistema:
   - Geralmente localizado em: `C:\Users\<seu-usuario>\AppData\Local\Android\Sdk\platform-tools`
   - Você pode encontrar o caminho correto abrindo o Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK

3. Execute o script para corrigir o ADB:
```bash
fix-adb.bat
```

## Executando o app via Expo Go (método mais simples)

Se continuar com problemas no emulador/ADB:

1. Instale o app Expo Go no seu smartphone Android
2. Execute `npm run start` no projeto
3. Escaneie o QR code com o aplicativo Expo Go
4. O app será carregado diretamente no seu smartphone

## Limpeza completa (em caso de problemas persistentes)

```bash
# Remova node_modules e cache
rmdir /s /q node_modules
npm cache clean --force

# Reinstale as dependências
npm install

# Limpe o cache do Expo
npx expo prebuild --clean

# Corrija as dependências
npm run fix-deps
```

Este procedimento deve resolver a maioria dos problemas relacionados às dependências do projeto.
