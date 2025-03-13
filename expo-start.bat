@echo off
echo Iniciando Expo com configuração correta de Java...

echo Configurando Java 17...
set JAVA_HOME=C:\Program Files\Java\jdk-17
set PATH=%JAVA_HOME%\bin;%PATH%

echo Usando a seguinte versão do Java:
java -version

echo.
echo Iniciando Expo...
npx expo start --clear

pause
