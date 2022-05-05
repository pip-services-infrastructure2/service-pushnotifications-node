import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
export declare class PushNotificationsNullConnector implements IPushNotificationsConnector {
    send(correlationId: string, notification: NotificationV1): Promise<void>;
    broadcast(correlationId: string, notification: NotificationV1): Promise<void>;
}
