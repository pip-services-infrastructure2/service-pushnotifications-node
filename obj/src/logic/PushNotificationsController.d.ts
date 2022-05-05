import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';
import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsController } from './IPushNotificationsController';
export declare class PushNotificationsController implements IConfigurable, IReferenceable, ICommandable, IPushNotificationsController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _connectors;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    send(correlationId: string, notification: NotificationV1): Promise<void>;
    sendMany(correlationId: string, notifications: NotificationV1[]): Promise<void>;
    broadcast(correlationId: string, notification: NotificationV1): Promise<void>;
    broadcastMany(correlationId: string, notifications: NotificationV1[]): Promise<void>;
}
