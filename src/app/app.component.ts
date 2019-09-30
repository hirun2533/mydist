import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Messages} from './models/messages.model';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'mydist';
  
member : Message[];
 
constructor(messagesService: MessagesService){
 messagesService.MesseagesContainer();
 this.member = messagesService.callMessage();
}
}