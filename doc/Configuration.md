# Configuration Guide <br/> PushNotifications Microservice

Configuration structure used by this module follows the 
[standard configuration](https://github.com/pip-services/pip-services/blob/master/usage/Configuration.md) 
structure.

Example **config.yml** file:

```yaml
- descriptor: "pip-services-container:container-info:default:default:1.0"
  name: "service-pushnotifications"
  description: "notification microservice"

- descriptor: "pip-services-commons:logger:console:default:1.0"
  level: "trace"

- descriptor: "service-pushnotifications:persistence:file:default:1.0"
  path: "./data/notifications.json"

- descriptor: "service-pushnotifications:controller:default:default:1.0"

- descriptor: "service-pushnotifications:service:commandable-http:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 3000
```
