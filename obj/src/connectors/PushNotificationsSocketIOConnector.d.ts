import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
import { IOpenable } from 'pip-services3-commons-nodex';
export declare class PushNotificationsSocketIOConnector implements IPushNotificationsConnector, IOpenable {
    private _opened;
    isOpen(): boolean;
    open(correlationId: string): Promise<void>;
    close(correlationId: string): Promise<void>;
    send(correlationId: string, notification: NotificationV1): Promise<void>;
    broadcast(correlationId: string, notification: NotificationV1): Promise<void>;
}
