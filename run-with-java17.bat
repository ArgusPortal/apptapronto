@echo off
echo Executando o aplicativo com Java 17...

REM Salvar JAVA_HOME atual
set OLD_JAVA_HOME=%JAVA_HOME%

REM Configurar para usar Java 17
set JAVA_HOME=C:\Program Files\Java\jdk-17
echo JAVA_HOME temporariamente configurado para: %JAVA_HOME%

REM Verificar se o Java 17 existe
if not exist "%JAVA_HOME%\bin\java.exe" (
    echo Erro: Java 17 não encontrado em %JAVA_HOME%
    echo Por favor, verifique se o Java 17 está instalado corretamente.
    echo Se o caminho estiver incorreto, edite este arquivo.
    goto :end
)

echo Versão do Java que será usada:
"%JAVA_HOME%\bin\java" -version

REM Executar a aplicação
echo Executando: npm run android
call npm run android

REM Restaurar JAVA_HOME
set JAVA_HOME=%OLD_JAVA_HOME%

:end
echo.
echo Processo concluído.
pause
