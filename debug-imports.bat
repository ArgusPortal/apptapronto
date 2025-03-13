@echo off
echo Testando os imports gradualmente para diagnóstico...

echo.
echo === Limpando cache ===
npx expo start --clear --no-dev --web

echo.
echo === Se a versão simplificada funcionou, verifique os imports um por um ===
echo Para testar com o AuthProvider, descomente a linha correspondente no App.js
echo.

echo Passos para resolução de problemas:
echo 1. Se a versão simplificada do App.js funcionou, o problema está nos imports
echo 2. Descomente gradualmente os imports no App.js para identificar qual está falhando
echo 3. Verifique se os arquivos estão exportando corretamente os componentes

echo.
echo Quando tiver identificado os componentes que funcionam, 
echo retorne para a versão completa do App.js
pause
