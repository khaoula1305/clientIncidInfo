export class Message {
    id: number;
    sender: string;
    receiver: string;
    titre: string;
    response: string;
    traite: boolean;
    read: boolean;
    division: string;
    date: string;
    parent: Message;
    children: Array<Message> = new Array<Message>();
}
