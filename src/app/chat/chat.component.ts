import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {WebSocketService} from '../../app/services/websocket.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userChat = {
    user:'',
    text: ''
  }

  myMessages;
  eventName= "send-message"

  constructor(private activated:ActivatedRoute, private webService:WebSocketService) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id;
    this.webService.listen('text-event').subscribe((data)=> {
      this.myMessages=data
    })
  }

  myMessage(){
    this.webService.emit(this.eventName,this.userChat)
    this.userChat.text= ''
  }
}
