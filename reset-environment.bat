@echo off
echo Configurando completamente o ambiente...

echo.
echo === Limpando caches e arquivos temporários ===
if exist android\.gradle (
    echo Removendo android\.gradle
    rmdir /s /q android\.gradle
)
if exist android\app\build (
    echo Removendo android\app\build
    rmdir /s /q android\app\build
)
if exist .expo (
    echo Removendo .expo
    rmdir /s /q .expo
)

echo.
echo === Verificando Java 17 ===
if exist "C:\Program Files\Java\jdk-17\bin\java.exe" (
    echo Java 17 encontrado em C:\Program Files\Java\jdk-17
) else (
    echo ERRO: Java 17 não encontrado!
    echo Por favor, instale o JDK 17 de https://adoptium.net/temurin/releases/?version=17
    pause
    exit /b 1
)

echo.
echo === Configurando variáveis de ambiente ===
set JAVA_HOME=C:\Program Files\Java\jdk-17
echo Definido JAVA_HOME=%JAVA_HOME%

echo.
echo === Criando/atualizando local.properties ===
echo # Localização do SDK Android > android\local.properties
echo sdk.dir=C:\\Users\\%USERNAME%\\AppData\\Local\\Android\\Sdk >> android\local.properties
echo org.gradle.java.home=C:\\Program Files\\Java\\jdk-17 >> android\local.properties
echo Arquivo local.properties criado/atualizado

echo.
echo === Atualizando gradle.properties ===
echo org.gradle.java.home=C:\\Program Files\\Java\\jdk-17 >> android\gradle.properties
echo Arquivo gradle.properties atualizado

echo.
echo === Reconstruindo projeto ===
call npx expo prebuild --clean
echo Reconstrução completa. Agora você pode executar:
echo.
echo npm run expo start --clear
echo.
pause
