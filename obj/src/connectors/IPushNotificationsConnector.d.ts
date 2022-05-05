import { NotificationV1 } from '../data/version1/NotificationV1';
export interface IPushNotificationsConnector {
    send(correlationId: string, notification: NotificationV1): Promise<void>;
    broadcast(correlationId: string, notification: NotificationV1): Promise<void>;
}
