@echo off
REM Set JAVA_HOME to JDK 17 to avoid compatibility issues
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Using Java 17 from: %JAVA_HOME%
echo.

REM Build the project
mvn clean install
