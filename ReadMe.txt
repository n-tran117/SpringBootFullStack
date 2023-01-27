Step to dockerized fullStack app :

SpringBoot :
	-Create environment variable for dynamically set DB and source url in properties file use syntax ${envVar:defaultValue}(defaultValue is needed to compile and build jar)
	-(Optional) Create a fonction that can be request to validate that application is running correctly (a ping request).
	-Build jar of the app
	-Create DockerFile. (see file directly for content))

Angular :
	-Create new environment.[envName].ts in /src/environments and set the apiUrl for backEnd to "http://[nameOfSpringContaine]:[listenPortSetInDocker][/request]"
	-Create DockerFile using the new environment file created. (see file directly for content)

Docker-Compose file :
	-Create docker-compose.yml in root folder containing all projects (see file directly for content)
