# vue-framework-intro2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### install new dependencies
```
npm install --save vue-router
```

#### Trouble shooting
The above dependency is used for vue v2.0, to work with version > 3.0, use the following command:

```
npm uninstall vue-router --save
npm i vue-router@next --save
```

### PROD running in local machine
```
npm install -g serve
serve -s dist
```

### Containerizing the VueJS app
In this step, we use the nginx as the host of our application image. In some articles, it mentioned using nginx as the host of application could boost the performance of VueJS app. Please check more information in this article https://cli.vuejs.org/guide/deployment.html

```
docker build . -t my-vuejs-app
docker run -d -p 8080:80 my-vuejs-app
curl localhost:8080
```