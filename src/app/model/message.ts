export class Message {
    id: number;
    sender: string;
    receiver: string;
    titre: string;
    responses: string[] = [''];
    traite: boolean;
    read: boolean;
    division: string;
    date: string;
    next: number;
}
