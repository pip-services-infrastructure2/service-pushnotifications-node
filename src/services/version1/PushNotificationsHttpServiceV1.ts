import { Descriptor } from 'pip-services3-commons-nodex';
import { CommandableHttpService } from 'pip-services3-rpc-nodex';

export class PushNotificationsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/push_notifications');
        this._dependencyResolver.put('controller', new Descriptor('service-pushnotifications', 'controller', 'default', '*', '1.0'));
    }
}