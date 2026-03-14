@echo off
echo ============================================
echo   SCENT TRIAL — Starting Dev Server
echo ============================================
node --version >nul 2>&1
if %errorlevel% neq 0 ( echo ERROR: Install Node.js from nodejs.org & pause & exit /b 1 )
if not exist "node_modules" ( echo Installing... & npm install )
echo.
echo  Website → http://localhost:3000
echo  Admin   → http://localhost:3000/admin
echo.
npm start
pause
