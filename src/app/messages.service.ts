import { Injectable } from '@angular/core';
import { Messages } from './models/messages.model';
import {Message} from './models/message.model';
;


@Injectable({providedIn: 'root'})


export class MessagesService {
 
  message = new Messages;
  


 
  constructor() {
    
  }
  
  MesseagesContainer() {
      let msg1 = new Message("Hello Hirunya!", new Date())
      let msg2 = new Message("How are you?", new Date())
      let msg3 = new Message("Where should we go?" , new Date())
     
      this.message.ArrayMessage.push(msg1,msg2,msg3);
  }
    callMessage(){
      return this.message.ArrayMessage;
    }

  }

