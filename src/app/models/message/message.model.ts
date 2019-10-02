export class Message {
    username: string;
    content: string;
    timestamp: string;

    constructor(username: string, content: string) {
        this.username = username;
        this.content = content;
        this.timestamp = "timestamp";
    }
}