@echo off
setlocal
echo ========================================================
echo          SkillSwap - Push to GitHub Utility
echo ========================================================
echo.

:: Ensure Git is in PATH
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd\git.exe" (
        set "PATH=C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd;%PATH%"
    ) else if exist "C:\Program Files\Git\cmd\git.exe" (
        set "PATH=C:\Program Files\Git\cmd;%PATH%"
    ) else (
        echo [ERROR] Git tidak ditemukan di komputer. Silakan install Git terlebih dahulu.
        pause
        exit /b 1
    )
)

echo [1/3] Menambahkan file yang berubah (git add)...
git add -A

echo.
set /p msg="Masukkan pesan commit (tekan Enter untuk default 'update project'): "
if "%msg%"=="" set msg=update project

echo.
echo [2/3] Melakukan commit dengan pesan: "%msg%"...
git commit -m "%msg%"

echo.
echo [3/3] Mengirim perubahan ke GitHub (git push origin main)...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   [BERHASIL] Seluruh file sukses ter-upload ke GitHub!
    echo ========================================================
) else (
    echo ========================================================
    echo   [PERHATIAN] Terjadi kendala saat push.
    echo   Jika muncul jendela browser, silakan login/authorize.
    echo ========================================================
)

echo.
pause
