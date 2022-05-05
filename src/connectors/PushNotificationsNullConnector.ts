import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';

export class PushNotificationsNullConnector implements IPushNotificationsConnector {
    public send(correlationId: string, notification: NotificationV1): Promise<void> {
        return;
    }
    
    public broadcast(correlationId: string, notification: NotificationV1): Promise<void> {
        return;
    }

}
