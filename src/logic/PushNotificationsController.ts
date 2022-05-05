import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { DependencyResolver } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';

import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from '../connectors/IPushNotificationsConnector';
import { IPushNotificationsController } from './IPushNotificationsController';
import { PushNotificationsCommandSet } from './PushNotificationsCommandSet';

export class PushNotificationsController implements IConfigurable, IReferenceable, ICommandable, IPushNotificationsController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.connector', 'service-pushnotifications:connector:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(PushNotificationsController._defaultConfig);
    private _connectors: IPushNotificationsConnector[];
    private _commandSet: PushNotificationsCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._connectors = this._dependencyResolver.getOptional<IPushNotificationsConnector>('connector');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new PushNotificationsCommandSet(this);
        return this._commandSet;
    }

    public async send(correlationId: string, notification: NotificationV1): Promise<void> {

        if (notification == null) {
            return;
        }
        
        let tasks = [];

        for (let connector of this._connectors)
            tasks.push(
                connector.send(correlationId, notification)
            );
        
        await Promise.all(tasks);
    }

    public async sendMany(correlationId: string, notifications: NotificationV1[]): Promise<void> {

        if (notifications == null || notifications.length == 0) {
            return;
        }

        let tasks = [];

        for (let connector of this._connectors) {
            for (let notification of notifications) {
                tasks.push(
                    connector.send(correlationId, notification)
                );
            }
        }
        
        await Promise.all(tasks);
    }
    
    public async broadcast(correlationId: string, notification: NotificationV1): Promise<void> {
        if (notification == null) {
            return;
        }

        let tasks = [];

        for (let connector of this._connectors)
            tasks.push(
                connector.broadcast(correlationId, notification)
            );

        await Promise.all(tasks);
    }

    public async broadcastMany(correlationId: string, notifications: NotificationV1[]): Promise<void> {
        if (notifications == null || notifications.length == 0) {
            return;
        }

        let tasks = [];

        for (let connector of this._connectors) {
            for (let notification of notifications) {
                tasks.push(
                    connector.broadcast(correlationId, notification)
                );
            }
        }
        
        await Promise.all(tasks);
    }
        
}
