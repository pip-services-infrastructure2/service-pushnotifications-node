import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
export declare class PushNotificationsServiceFactory extends Factory {
    static Descriptor: Descriptor;
    static NullConnectorDescriptor: Descriptor;
    static SocketIOConnectorDescriptor: Descriptor;
    static ControllerDescriptor: Descriptor;
    static CmdHttpServiceDescriptor: Descriptor;
    constructor();
}
