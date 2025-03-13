@echo off
echo Verificando a configuração de Java para o Android...

echo.
echo Versão do Java instalada atualmente:
java -version

echo.
echo Procurando instalação do Java 17...

if exist "C:\Program Files\Java\jdk-17\bin\java.exe" (
    echo Java 17 encontrado em C:\Program Files\Java\jdk-17
    echo Esta versão é compatível com Gradle 7.5.1
    
    echo.
    echo Configurando gradle.properties...
    
    echo # Definindo Java 17 para Gradle >> android\gradle.properties
    echo org.gradle.java.home=C:\\Program Files\\Java\\jdk-17 >> android\gradle.properties
    
    echo.
    echo Configuração concluída! Execute:
    echo npm run android
) else (
    echo Java 17 não encontrado no local padrão.
    echo.
    echo Por favor, instale o Java 17 (JDK) de:
    echo https://adoptium.net/temurin/releases/?version=17
    echo.
    echo Depois de instalar, execute este script novamente.
    echo.
    echo Alternativa: Edite o arquivo android\gradle.properties manualmente
    echo e adicione a linha abaixo com o caminho correto para seu JDK:
    echo org.gradle.java.home=C:\\Caminho\\Para\\Seu\\JDK17
)

pause
