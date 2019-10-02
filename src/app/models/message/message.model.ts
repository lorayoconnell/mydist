import { UserComponent } from '../user/user.component';

export class Message {
    user: UserComponent;
    // username: string;
    content: string;
    timestamp: string;

    constructor(username: string, content: string) {
        this.user = new UserComponent(username);
        this.content = content;
        this.timestamp = this.getTimeStamp();
    }


    getTimeStamp(): string {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        var today = new Date();

        var m = months[today.getMonth()];
        var d = today.getDate();
        var y = today.getFullYear();
        var yy = y.toString().substr(-2);

        var h = today.getHours();
        var mins = today.getMinutes();
        var minutes = mins.toString();
        var secs = today.getSeconds();
        var seconds = secs.toString();
        var ampm = '';

        if (h < 12) ampm = ' AM';
        else ampm = ' PM';

        if (mins < 10) minutes = '0' + minutes;
        
        if (secs < 10) seconds = '0' + seconds;

        var currentDateTime = m + '-' + d + '-' + yy + ' '
                + h + ':' + minutes + ':' + seconds + ampm;

        return currentDateTime;
    }

}