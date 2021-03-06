# Swagger generated server

## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.


### Running the server
To run the server, run:

```
Navigate to the respective revision: cd R1
Start the api: npm start
```

### Unit Testing
#### Normal Unit Testing:

```
npm run test
```

#### Pact Unit Testing:
To generate the pacts for client, run:

```
npm run test:client
```
To verify the pacts againt the API, run:

```
npm run test:api
```

### Building Docker Image
To build the docker image:

```
docker build -t [RepoName] [destination]
```


To view the Swagger UI interface:

```
open http://localhost:3000/docs
```


This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
