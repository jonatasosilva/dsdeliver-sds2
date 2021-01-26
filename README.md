# DSDelivery
![cover](https://raw.githubusercontent.com/jonatasosilva/dsdeliver-sds2/master/assets/cover.jpeg)

## Sobre o projeto
Sistema de registro e entrega de pedidos. As interfaces de usuário foram
construídas com React e React Native. Já o back-end foi desenvolvido com
Spring Boot.

[https://dsdelivery.jonatasosilva.dev/](https://dsdelivery.jonatasosilva.dev/)

## Como executar o projeto
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Docker, Docker Compose, Git e Node.js.

### Back-end e Front-end
```bash
# Clone este repositório
$ git clone https://github.com/jonatasosilva/dsdeliver-sds2

# Acesse a pasta do projeto no terminal
$ cd dsdeliver-sds2

# Duplique o arquivo .env
$ cp front-web/.env.example front-web/.env

# Adicione o seu token do Mapbox nas variáveis de ambiente
$ nano front-web/.env

# Faça o build do container
$ docker-compose up -d
```

### Mobile
```bash
# Vá para a pasta front-mobile
$ cd front-mobile

# Instale as dependências
$ yarn install

# Substitua o valor da constante API_URL pelo IP da sua máquina
$ nano src/api.ts 

# Execute a aplicação
$ yarn start
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