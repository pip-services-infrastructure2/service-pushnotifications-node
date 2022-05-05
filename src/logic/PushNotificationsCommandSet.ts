import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { ArraySchema } from 'pip-services3-commons-nodex';

import { NotificationV1Schema } from '../data/version1/NotificationV1Schema';
import { IPushNotificationsController } from './IPushNotificationsController';

export class PushNotificationsCommandSet extends CommandSet {
    private _logic: IPushNotificationsController;

    constructor(logic: IPushNotificationsController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeSendCommand());
		this.addCommand(this.makeSendManyCommand());
		this.addCommand(this.makeBroadcastCommand());
		this.addCommand(this.makeBroadcastManyCommand());
    }

	private makeSendCommand(): ICommand {
		return new Command(
			"send",
			new ObjectSchema(true)
				.withRequiredProperty('notification', new NotificationV1Schema()),
			async (correlationId: string, args: Parameters) => {
				let notification = args.get("notification");
				await this._logic.send(correlationId, notification);
			}
		);
	}

	private makeSendManyCommand(): ICommand {
		return new Command(
			"send_many",
			new ObjectSchema(true)
				.withRequiredProperty('notifications', new ArraySchema(new NotificationV1Schema())),
			async (correlationId: string, args: Parameters) => {
				let notifications = args.get("notifications");
				await this._logic.sendMany(correlationId, notifications);
			}
		);
	}

	private makeBroadcastCommand(): ICommand {
		return new Command(
			"broadcast",
			new ObjectSchema(true)
				.withRequiredProperty('notification', new NotificationV1Schema()),
			async (correlationId: string, args: Parameters) => {
				let notification = args.get("notification");
				await this._logic.broadcast(correlationId, notification);
			}
		);
	}

	private makeBroadcastManyCommand(): ICommand {
		return new Command(
			"broadcast_many",
			new ObjectSchema(true)
				.withRequiredProperty('notifications', new ArraySchema(new NotificationV1Schema())),
			async (correlationId: string, args: Parameters) => {
				let notifications = args.get("notifications");
				await this._logic.broadcastMany(correlationId, notifications);
			}
		);
	}    
}