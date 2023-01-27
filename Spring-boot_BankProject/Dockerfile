# Use official JDK image as the base image
FROM openjdk:19-jdk-alpine

# Copy jar in image
ADD target/full-stack-spring-boot-docker.jar full-stack-spring-boot-docker.jar

# Execute the jar when the image run
ENTRYPOINT ["java","-jar","/full-stack-spring-boot-docker.jar"]
