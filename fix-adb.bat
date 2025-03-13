@echo off
echo Resolvendo problemas de ADB para o Expo...

echo Parando todos os servidores ADB existentes...
adb kill-server

echo Verificando a versão do ADB...
adb version

echo Iniciando o servidor ADB...
adb start-server

echo Listando dispositivos conectados...
adb devices

echo Se você vir dispositivos listados acima, o ADB está funcionando corretamente.
echo Para executar o projeto:
echo 1. Execute 'npm run doctor' para corrigir dependências
echo 2. Execute 'npm run android' para iniciar o aplicativo
pause
