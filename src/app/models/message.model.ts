import { DatePipe } from '@angular/common';


export class Message {

    
    
    MyMessage : string;
    timestamp: string;
    


    constructor(MyMessage?: string, timestamp?: string) 
        { 
            
           this.MyMessage = MyMessage;
           this.timestamp = timestamp;
        }

}
