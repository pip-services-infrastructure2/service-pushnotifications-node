import { IStringIdentifiable } from 'pip-services3-commons-nodex';

export class NotificationV1 implements IStringIdentifiable {
    public id: string;
    public type: string;
    public priority: number;
    public title: string;
    public description?: string;
    public create_time?: Date;
    public recipient_ids?: string[];
    public actions?: string[];
    public value?: any;
}