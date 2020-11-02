@echo off
:start
node index.js
@echo.
@echo Press any key to restart bot...&pause >nul
call %~n0
