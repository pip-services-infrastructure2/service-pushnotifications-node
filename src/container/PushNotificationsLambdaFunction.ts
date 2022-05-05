import { Descriptor } from 'pip-services3-commons-nodex';
import { CommandableLambdaFunction } from 'pip-services3-aws-nodex';
import { PushNotificationsServiceFactory } from '../build/PushNotificationsServiceFactory';

export class PushNotificationsLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("push_notifications", "Push notifications function");
        this._dependencyResolver.put('controller', new Descriptor('service-pushnotifications', 'controller', 'default', '*', '*'));
        this._factories.add(new PushNotificationsServiceFactory());
    }
}

export const handler = new PushNotificationsLambdaFunction().getHandler();