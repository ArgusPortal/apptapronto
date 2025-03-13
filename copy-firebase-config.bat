@echo off
echo Copiando arquivo google-services.json para a pasta android/app/...

if not exist android\app\ (
    echo Criando a pasta android/app...
    mkdir android\app
)

copy google-services.json android\app\
echo Arquivo copiado com sucesso!
pause
