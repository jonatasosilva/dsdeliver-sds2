FROM openjdk:11
WORKDIR /usr/src/myapp
COPY . .
RUN ./mvnw install
CMD ["./mvnw", "spring-boot:run"]