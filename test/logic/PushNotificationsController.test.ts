import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { NotificationV1 } from '../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsNullConnector } from '../../src/connectors/PushNotificationsNullConnector';
import { PushNotificationsController } from '../../src/logic/PushNotificationsController';

suite('PushNotificationsController', ()=> {
    let controller: PushNotificationsController;

    let NOTIFICATION1: NotificationV1 = {
        id: '1',
        type: 'test',
        priority: NotificationPriorityV1.High,
        title: 'Test Notification 1', 
        description: 'This is a test',
        recipient_ids: ['1', '2'],
        value: 'ABC',
        actions: ['ok']
    }
    let NOTIFICATION2: NotificationV1 = {
        id: '2',
        type: 'test',
        priority: NotificationPriorityV1.Medium,
        title: 'Test Notification 2', 
        description: 'This is a test',
        recipient_ids: ['3'],
        value: 'XYZ',
        actions: ['accept', 'reject']
    }

    suiteSetup(async () => {
        controller = new PushNotificationsController();
        let connector = new PushNotificationsNullConnector();

        let references: References = References.fromTuples(
            new Descriptor('service-pushnotifications', 'connector', 'null', 'default', '1.0'), connector,
            new Descriptor('service-pushnotifications', 'controller', 'default', 'default', '1.0'), controller
        );
        controller.setReferences(references);
    });
   
    test('Send Notification', async () => {
        // Send one notification
        await controller.send(null, NOTIFICATION1);

        // Send two notifications
        await controller.sendMany(null, [NOTIFICATION1, NOTIFICATION2]);
    });

    test('Broadcast Notification', async () => {
        // Broadcast one notification
        await controller.broadcast(null, NOTIFICATION1);

        // Broadcast two notifications
        await controller.broadcastMany(null, [NOTIFICATION1, NOTIFICATION2]);
    });

});