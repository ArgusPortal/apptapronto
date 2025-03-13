# Configuração Java para Android

O erro `Unsupported class file major version 65` ocorre porque você está usando Java 21, mas o Gradle 7.5.1 (usado por este projeto) suporta no máximo até Java 18.

## Opções para resolver

### Opção 1: Instalar Java 17 (recomendado)

1. Baixe e instale o JDK 17 de: https://adoptium.net/temurin/releases/?version=17
2. Execute o script `check-java.bat` para configurar o projeto para usar Java 17
3. Execute `npm run android` novamente

### Opção 2: Configurar manualmente o caminho para uma versão compatível do Java

Se você já tem uma versão compatível do Java (8, 11, 16 ou 17), adicione a seguinte linha ao arquivo `android/gradle.properties`:

```properties
org.gradle.java.home=C:\\Caminho\\Para\\Seu\\JDK
```

Substitua `C:\\Caminho\\Para\\Seu\\JDK` pelo caminho real para sua instalação do JDK.

### Opção 3: Definir JAVA_HOME temporariamente para o comando

```bat
set JAVA_HOME=C:\Caminho\Para\Seu\JDK17
npm run android
```

## Verificando versões do Java instaladas

Para verificar qual versão do Java está instalada e ativa:

```bash
java -version
```

## Notas importantes

1. O Gradle 7.5.1 usado neste projeto é compatível com Java 8-18.
2. Instalar múltiplas versões do JDK é comum em desenvolvimento Android.
3. O Android Studio pode gerenciar diferentes versões do JDK para você.
