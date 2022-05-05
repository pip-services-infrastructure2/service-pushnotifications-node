import { NotificationV1 } from '../data/version1/NotificationV1';

export interface IPushNotificationsController {
    send(correlationId: string, notification: NotificationV1): Promise<void>;

    sendMany(correlationId: string, notifications: NotificationV1[]): Promise<void>;
    
    broadcast(correlationId: string, notification: NotificationV1): Promise<void>;

    broadcastMany(correlationId: string, notifications: NotificationV1[]): Promise<void>;
}
