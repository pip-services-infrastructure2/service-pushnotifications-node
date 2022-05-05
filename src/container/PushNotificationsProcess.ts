import { ProcessContainer } from 'pip-services3-container-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';
import { DefaultSwaggerFactory } from 'pip-services3-swagger-nodex';

import { PushNotificationsServiceFactory } from '../build/PushNotificationsServiceFactory';

export class PushNotificationsProcess extends ProcessContainer {

    public constructor() {
        super("push_notifications", "Push notifications microservice");
        this._factories.add(new PushNotificationsServiceFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultSwaggerFactory);
    }

}
