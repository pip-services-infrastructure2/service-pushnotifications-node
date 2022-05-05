# PushNotifications Microservice

This is a notification microservice from Pip.Services library. 
It manages system notification separated by individual sections.
Each section contains multiple key-value parameter pairs. 

The microservice currently supports the following deployment options:
* Deployment platforms: Standalone Process, AWS Lambda
* External APIs: HTTP/REST
* Connectors: Null, Socket.io

This microservice has no dependencies on other microservices.

<a name="links"></a> Quick Links:

* [Download Links](doc/Downloads.md)
* [Development Guide](doc/Development.md)
* [Configuration Guide](doc/Configuration.md)
* [Deployment Guide](doc/Deployment.md)
* Client SDKs
  - [Node.js SDK](https://github.com/pip-services-infrastructure2/client-notification-node)
* Communication Protocols
  - [HTTP Version 1](doc/HttpProtocolV1.md)
  - [Seneca Version 1](doc/SenecaProtocolV1.md)

## Contract

Logical contract of the microservice is presented below. For physical implementation (HTTP/REST, Thrift, Seneca, Lambda, etc.),
please, refer to documentation of the specific protocol.

```typescript
class NotificationV1 implements IStringIdentifiable {
    public id: string;
    public parameters: ConfigParams;
    public update_time: Date;
}

interface IPushNotificationsV1 {
    getSections(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<NotificationV1>) => void): void;
    
    getSectionById(correlationId: string, id: string, 
        callback: (err: any, parameters: ConfigParams) => void): void;

    setSection(correlationId: string, id: string, parameters: ConfigParams,
        callback?: (err: any, parameters: ConfigParams) => void): void;

    modifySection(correlationId: string, id: string, updateParams: ConfigParams, 
        incrementParams: ConfigParams,
        callback?: (err: any, parameters: ConfigParams) => void): void;
}
```

## Download

Right now the only way to get the microservice is to check it out directly from github repository
```bash
git clone git@github.com:pip-services-infrastructure2/service-pushnotifications-node.git
```

Pip.Service team is working to implement packaging and make stable releases available for your 
as zip downloadable archieves.

## Run

Add **config.yml** file to the root of the microservice folder and set configuration parameters.
As the starting point you can use example configuration from **config.example.yml** file. 

Example of microservice configuration
```yaml
- descriptor: "pip-services-container:container-info:default:default:1.0"
  name: "service-pushnotifications"
  description: "PushNotifications microservice"

- descriptor: "pip-services-commons:logger:console:default:1.0"
  level: "trace"

- descriptor: "service-pushnotifications:persistence:file:default:1.0"
  path: "./data/notifications.json"

- descriptor: "service-pushnotifications:controller:default:default:1.0"

- descriptor: "service-pushnotifications:service:http:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8080
```
 
For more information on the microservice configuration see [Configuration Guide](Configuration.md).

Start the microservice using the command:
```bash
node run
```

## Use

The easiest way to work with the microservice is to use client SDK. 
The complete list of available client SDKs for different languages is listed in the [Quick Links](#links)

If you use Node.js then you should add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-notification-node": "^1.0.*",
        ...
    }
}
```

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-notification-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.PushNotificationsHttpClientV1(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
var parameters = {
    myapp: {
        theme: 'blue',
        language: 'en'
    }
};

// Sets section parameters
client.setSection(
    null,
    '123',
    parameters,
    function (err, parameters) {
        ...
    }
);
```

```javascript
// Get section parameters
client.getSectionById(
    null,
    '123',
    function(err, parameters) {
    ...    
    }
);
```    

## Acknowledgements

This microservice was created and currently maintained by *Sergey Seroukhov*.

