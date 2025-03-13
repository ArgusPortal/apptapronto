@echo off
echo Configurando Firebase para o App Tá Pronto...

if exist android\app\google-services.json (
    echo O arquivo google-services.json já existe!
) else (
    echo Arquivo google-services.json não encontrado.
    echo Por favor, siga as instruções em FIREBASE_SETUP.md para baixar este arquivo.
    echo do console do Firebase e coloque-o em android\app\
    echo.
    
    if not exist android\app (
        echo Pasta android/app não encontrada. Criando estrutura nativa...
        npx expo prebuild
    )
    
    echo.
    echo Após baixar o arquivo, coloque-o em:
    echo %cd%\android\app\google-services.json
)

echo.
echo Verificando dependências do Firebase...
npm run fix-deps

echo.
echo Configuração completa! Execute:
echo npm run android
echo.
pause
