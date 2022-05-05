import { ConfigParams } from 'pip-services3-commons-nodex';

import { NotificationV1 } from '../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsLambdaFunction } from '../../src/container/PushNotificationsLambdaFunction';

suite('PushNotificationsLambdaFunction', ()=> {
    let lambda: PushNotificationsLambdaFunction;

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
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'connector.descriptor', 'service-pushnotifications:connector:null:default:1.0',
            'controller.descriptor', 'service-pushnotifications:controller:default:default:1.0'
        );

        lambda = new PushNotificationsLambdaFunction();
        lambda.configure(config);
        await lambda.open(null);
    });
    
    suiteTeardown(async () => {
        await lambda.close(null);
    });
    
    test('Send Notification', async () => {
        // Send one notification
        await lambda.act(
            {
                role: 'push_notifications',
                cmd: 'send',
                notification: NOTIFICATION1
            }
        );

        // Send two notifications
        await lambda.act(
            {
                role: 'push_notifications',
                cmd: 'send_many',
                notifications: [NOTIFICATION1, NOTIFICATION2]
            }
        );
    });

    test('Broadcast Notification', async () => {
        // Broadcast one notification
        await lambda.act(
            {
                role: 'push_notifications',
                cmd: 'broadcast',
                notification: NOTIFICATION1
            }
        );

        // Broadcast two notifications
        await lambda.act(
            {
                role: 'push_notifications',
                cmd: 'broadcast_many',
                notifications: [NOTIFICATION1, NOTIFICATION2]
            }
        );
    });

});