import { CommandSet } from 'pip-services3-commons-nodex';
import { IPushNotificationsController } from './IPushNotificationsController';
export declare class PushNotificationsCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IPushNotificationsController);
    private makeSendCommand;
    private makeSendManyCommand;
    private makeBroadcastCommand;
    private makeBroadcastManyCommand;
}
