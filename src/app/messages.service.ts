import { Injectable } from '@angular/core';
import { Messages } from './models/messages.model';
import {Message} from './models/message.model';


@Injectable({providedIn: 'root'})


export class MessagesService {
 
  message = new Messages;
   
  constructor() {  }
  
  MesseagesContainer() {

      let msg1 = new Message("Hello Hirunya!", new Date().toUTCString());
      let msg2 = new Message("How are you?", new Date().toUTCString());
      let msg3 = new Message("Message from me!!!" , new Date().toUTCString());
      let msg4 = new Message("Where should we go?" , new Date().toUTCString());
     
      this.message.ArrayMessage.push(msg1,msg2,msg3,msg4);
  }
    callMessage(){
      return this.message.ArrayMessage;
    }

  }

