"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsNullConnector = void 0;
class PushNotificationsNullConnector {
    send(correlationId, notification) {
        return;
    }
    broadcast(correlationId, notification) {
        return;
    }
}
exports.PushNotificationsNullConnector = PushNotificationsNullConnector;
//# sourceMappingURL=PushNotificationsNullConnector.js.map