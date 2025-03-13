@echo off
echo Limpando o cache do Gradle...

REM Remover o diretório .gradle
if exist android\.gradle (
    echo Removendo android\.gradle
    rmdir /s /q android\.gradle
)

REM Removendo o diretório build
if exist android\app\build (
    echo Removendo android\app\build
    rmdir /s /q android\app\build
)

echo.
echo Limpeza concluída. Execute o projeto novamente com:
echo run-with-java17.bat
pause
