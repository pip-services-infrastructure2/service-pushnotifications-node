const restify = require('restify');

import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { NotificationV1 } from '../../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsNullConnector } from '../../../src/connectors/PushNotificationsNullConnector';
import { PushNotificationsController } from '../../../src/logic/PushNotificationsController';
import { PushNotificationsCommandableHttpServiceV1 } from '../../../src/services/version1/PushNotificationsCommandableHttpServiceV1';

let restConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PushNotificationsHttpServiceV1', ()=> {
    let service: PushNotificationsCommandableHttpServiceV1;

    let rest: any;

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
        let connector = new PushNotificationsNullConnector();
        let controller = new PushNotificationsController();

        service = new PushNotificationsCommandableHttpServiceV1();
        service.configure(restConfig);

        let references: References = References.fromTuples(
            new Descriptor('service-pushnotifications', 'connector', 'null', 'default', '1.0'), connector,
            new Descriptor('service-pushnotifications', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-pushnotifications', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        await service.open(null);
    });
    
    suiteTeardown(async () => {
        await service.close(null);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });

    test('Send Notification', async () => {
        // Send one notification
        await new Promise<any>((resolve, reject) => {
            rest.post('/v1/push_notifications/send',
                {
                    notification: NOTIFICATION1
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        // Send two notifications
        await new Promise<any>((resolve, reject) => {
            rest.post('/v1/push_notifications/send_many',
                {
                    notifications: [NOTIFICATION1, NOTIFICATION2]
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });
    });

    test('Broadcast Notification', async () => {
        // Broadcast one notification
        await new Promise<any>((resolve, reject) => {
            rest.post('/v1/push_notifications/broadcast',
                {
                    notification: NOTIFICATION1
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        // Broadcast two notifications
        await new Promise<any>((resolve, reject) => {
            rest.post('/v1/push_notifications/broadcast_many',
                {
                    notifications: [NOTIFICATION1, NOTIFICATION2]
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });
    });

});