# DS Deliver
![cover](https://raw.githubusercontent.com/jonatasosilva/dsdeliver-sds2/master/assets/cover.jpeg)

## Sobre o projeto
[https://dsdeliver.jonatasosilva.dev/](https://dsdeliver.jonatasosilva.dev/)

O projeto consiste em um sistema de registro e entrega de pedidos. Utilizamos Java com Spring Boot, e implementação no Heroku.

## Como executar o projeto
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Java e Node.js.

```bash
# Clone este repositório
$ git clone https://github.com/jonatasosilva/dsdeliver-sds2

# Acesse a pasta do projeto no terminal/cmd
$ cd dsdeliver-sds2
```

### Back-end
```bash
# Vá para a pasta backend
$ cd backend

# Execute a aplicação
$ ./mvnw spring-boot:run
```

### Front-end
```bash
# Vá para a pasta front-web
$ cd front-web

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

### Mobile
```bash
# Vá para a pasta front-mobile
$ cd front-mobile

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

## Tecnologias
### Backend ([Java](https://www.oracle.com/br/java/) + [Spring Boot](https://spring.io/projects/spring-boot))
- [H2 Database Engine](https://www.h2database.com/)
- [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/)
- [Spring Boot Starter Data JPA](https://spring.io/guides/gs/accessing-data-jpa/)
- [Spring Boot Starter Security](https://spring.io/guides/gs/securing-web/)
- [Spring Boot Starter Test](https://spring.io/guides/gs/testing-web/)
- [Spring Boot Starter Validation](https://spring.io/guides/gs/validating-form-input/)
- [Spring Boot Starter Web](https://spring.io/guides/gs/spring-boot/)

### Website ([TypeScript](https://www.typescriptlang.org/) + [React](https://reactjs.org/))
- [Axios](https://github.com/axios/axios)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [React Select](https://react-select.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

### Mobile ([TypeScript](https://www.typescriptlang.org/) + [React Native](https://reactnative.dev/))
- [Axios](https://github.com/axios/axios)
- [Day.js](https://day.js.org/)
- [Expo](https://expo.io/)
- [Expo AppLoading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [Expo Font](https://docs.expo.io/versions/latest/sdk/font/)
- [Expo Google Fonts](https://docs.expo.io/guides/using-custom-fonts/)
- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
- [React Native MaskedView](https://github.com/react-native-masked-view/masked-view)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)
- [React Navigation](https://reactnavigation.org/)