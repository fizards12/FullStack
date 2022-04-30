# ***PipeLine Process***

## First: Define the Orbs used:

### `AWS-CLI - Elastic beanstalk - nodejs`

## Jops:

### Installation:

#### 1. install the **root** modules:

##### Run: `npm install`
```
this command will install the node modules that specified on Package.json DevDependencies which on the root folder (./FullStack Folder) which needed for the project Level.
(this Will create a "nodemodules" folder on the root folder)
```

#### 2. install the **Front-End** node modules:

##### Run: `npm run frontend:install`
```
install the node modules specified on the package.json file on the (udagram-frontend) Folder to use it to build the Front-End Hosting.

(this Will create a "nodemodules" folder on the "udagram-frontend" folder)
```

#### 3. install the **Back-End** node modules:

##### Run: `npm run api:install`
```
install the node modules specified on the package.json file on the (udagram-api) Folder to use it to build the Back-End Server.

(this Will create a "nodemodules" folder on the "udagram-api" folder).
```

### Building:

#### 4. Building **Front-End**:

##### Run: `npm run frontend:build`
``` 
this command will generate a "www" folder on "udagram-frontend" folder 
this folder will have the build version of the "Front-End" which is ready to use to host the User Interface.
```

#### 5. Building **Back-End**:

##### Run: `npm run api:build`
``` 
this command will generate a "www" folder on "udagram-api" folder 
this folder will have the build version of the "Back-End" which is ready to use to host the Server Side.
```
### Deployment:

#### 6. Deploy **Back-End**:

##### Run: `npm run api:deploy`
```
this command will take the contents of the "www" folder on the "udagram-api" folder and compressing as ZIP file and deploying it to the "Elastic Beanstalk" Service which will provide the Web-Server. 
```

#### 7. Deploy **Front-End**:

##### Run: `npm run frontend:deploy`
```
this command will take the contents of the "www" folder on the "udagram-frontend" folder and uploading it to the "frnt-end" S3 Bucket which will provide the "User Interface Hosting". 
```