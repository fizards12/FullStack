# ***Infrastructure Description***
## 1. DataBase
```
creating Postgres DataBase to store any informations to it.

AWS RDS Service is used to Create the DataBase and providing a server to connect to it.

Link: database-1.cdeinnqkngdp.us-east-1.rds.amazonaws.com
```
## 2. Web-Server
```
We need a server to serve the endpoints the user touches by the user interface(Front-End)

AWS Elastic Beanstalk service is used to create the Express Web-Server

Link: http://fullstack-env.eba-9mfgzybx.us-east-1.elasticbeanstalk.com/api/v0
```
## 3. Front-End Hosting
```
it's what appear to the user and deal with

AWS S3 Service is used to provide the (Angular) Web Hosting.


Link: http://frnt-side.s3-website-us-east-1.amazonaws.com
```
## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
