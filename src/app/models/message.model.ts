

export class Message {

    
    
    MyMessage : string;
    timestamp: Date;


    constructor(MyMessage?: string, timestamp?: Date) 
        { 
            
           this.MyMessage = MyMessage;
           this.timestamp = timestamp;
        }

}
