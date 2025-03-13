# Configurando o Firebase para o App Tá Pronto

Para configurar corretamente o Firebase para Android, siga estes passos:

## 1. Acesse o Console do Firebase

- Vá para [console.firebase.google.com](https://console.firebase.google.com)
- Faça login com sua conta Google

## 2. Escolha o projeto "testeenviardados" ou crie um novo

Se o projeto não existir, crie um novo:
- Clique em "Adicionar projeto"
- Digite o nome do projeto (ex: testeenviardados)
- Siga as instruções para criar o projeto

## 3. Registre o aplicativo Android

- No painel do Firebase, clique em "Adicionar aplicativo" e selecione o ícone Android
- No campo "Nome do pacote Android", digite: `com.tapronto.app` (deve corresponder ao valor em app.json)
- Opcionalmente, digite um apelido para o aplicativo (ex: "App Tá Pronto")
- Clique em "Registrar aplicativo"

## 4. Baixe o arquivo google-services.json

- O Firebase gerará um arquivo `google-services.json`
- Baixe este arquivo e coloque-o na pasta `android/app/` do seu projeto
  (Se a pasta não existir, execute `npx expo prebuild` para gerar os arquivos nativos)

## 5. Certifique-se de que o build.gradle tem as configurações corretas

O arquivo `android/build.gradle` já deve ter as dependências do Firebase.
Verifique se as seguintes linhas existem:

```groovy
buildscript {
  dependencies {
    // ... outras dependências
    classpath 'com.google.gms:google-services:4.3.15'
  }
}
```

E no arquivo `android/app/build.gradle`, deve haver:

```groovy
plugins {
  id 'com.android.application'
  id 'com.google.gms.google-services' // Esta linha deve estar presente
}
```

## 6. Reconstrua seu aplicativo

```bash
# Limpe o cache
npm run clean

# Crie novamente os arquivos nativos (isso preservará o google-services.json)
npm run prebuild

# Execute o aplicativo
npm run android
```
