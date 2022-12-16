"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsServiceFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const PushNotificationsNullConnector_1 = require("../connectors/PushNotificationsNullConnector");
const PushNotificationsSocketIOConnector_1 = require("../connectors/PushNotificationsSocketIOConnector");
const PushNotificationsController_1 = require("../logic/PushNotificationsController");
const PushNotificationsCommandableHttpServiceV1_1 = require("../services/version1/PushNotificationsCommandableHttpServiceV1");
class PushNotificationsServiceFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(PushNotificationsServiceFactory.NullConnectorDescriptor, PushNotificationsNullConnector_1.PushNotificationsNullConnector);
        this.registerAsType(PushNotificationsServiceFactory.SocketIOConnectorDescriptor, PushNotificationsSocketIOConnector_1.PushNotificationsSocketIOConnector);
        this.registerAsType(PushNotificationsServiceFactory.ControllerDescriptor, PushNotificationsController_1.PushNotificationsController);
        this.registerAsType(PushNotificationsServiceFactory.CmdHttpServiceDescriptor, PushNotificationsCommandableHttpServiceV1_1.PushNotificationsCommandableHttpServiceV1);
    }
}
exports.PushNotificationsServiceFactory = PushNotificationsServiceFactory;
PushNotificationsServiceFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor("service-pushnotifications", "factory", "default", "default", "1.0");
PushNotificationsServiceFactory.NullConnectorDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-pushnotifications", "connector", "null", "*", "1.0");
PushNotificationsServiceFactory.SocketIOConnectorDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-pushnotifications", "connector", "socketio", "*", "1.0");
PushNotificationsServiceFactory.ControllerDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-pushnotifications", "controller", "default", "*", "1.0");
PushNotificationsServiceFactory.CmdHttpServiceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-pushnotifications", "service", "commandable-http", "*", "1.0");
//# sourceMappingURL=PushNotificationsServiceFactory.js.map