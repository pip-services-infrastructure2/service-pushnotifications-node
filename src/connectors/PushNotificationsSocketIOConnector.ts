import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
import { IOpenable } from 'pip-services3-commons-nodex';

export class PushNotificationsSocketIOConnector
    implements IPushNotificationsConnector, IOpenable {
    private _opened: boolean = false;

    public isOpen(): boolean {
        return this._opened;
    }

    public async open(correlationId: string): Promise<void> {
        this._opened = true;
    }

    public async close(correlationId: string): Promise<void> {
        this._opened = false;
    }

    public async send(correlationId: string, notification: NotificationV1): Promise<void> {
        return
    }

    public async broadcast(correlationId: string, notification: NotificationV1): Promise<void> {
        return
    }
}
