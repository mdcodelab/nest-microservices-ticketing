export const KAFKA_BROKER = process.env.KAFKA_BROKER || 'localhost:9093';
export const KAFKA_CLIENT_ID="eventflowapp";
export const KAFKA_COMSUMER_GROUP="eventflowapp-group";

//kafka topics
export const KAFKA_TOPICS= {
    //auth events
    USER_REGISTERED: 'user.registered',
    USER_LOGIN: 'user.login',
    PASSWORD_RESET_REQUESTER: 'user.password-reset-requested',

    //enents
    EVENT_CREATED: "event.created",
    EVENT_UPDATED: "event.updated",
    EVENT_CANCELED: "event.canceled",

    //ticket events
    TICKET_PURCHASED: "ticket.purchased",
    TICKET_CANCELED: "ticket.canceled",
    TICKET_CHECKED_IN: "ticket.checked-in",

    //Payment events
    PAYMENT_COMPLETED: "payment.completed",
    PAYMENT_FAILED: "payment.failed",
    PAYMENT_REFUNDED: "payment.refunded",

    //Notification triggers
    SEND_EMAIL: "notification.send-email",
    SEND_PUSH: "notification.send-push",
}

export type KafkaTopic = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];
