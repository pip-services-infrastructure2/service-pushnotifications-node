import { ConfigParams } from 'pip-services3-commons-nodex';

import { PushNotificationsSocketIOConnector } from '../../src/connectors/PushNotificationsSocketIOConnector';
import { PushNotificationsConnectorFixture } from './PushNotificationsConnectorFixture';

let restConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PushNotificationsSocketIOConnector', ()=> {
    let connector: PushNotificationsSocketIOConnector;
    let fixture: PushNotificationsConnectorFixture;

    suiteSetup(async () => {
        connector = new PushNotificationsSocketIOConnector();
        fixture = new PushNotificationsConnectorFixture(connector);

        await connector.open(null);
    });
    
    suiteTeardown(async () => {
        await connector.close(null);
    });
   
    test('Send Notification', async () => {
        await fixture.testSendNotification();
    });

    test('Broadcast Notification', async () => {
        await fixture.testBroadcastNotification();
    });

});