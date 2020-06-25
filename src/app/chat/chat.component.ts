import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {WebSocketService} from '../../app/services/websocket.service'
import { Observable, Subscription } from 'rxjs';
import { Document } from '../dominio/documet';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  userChat = {
    user:'',
    text: ''
  }
  myMessages;
  eventName= "send-message"
  registro= "registerUser"
  login = "loginUser"
  enviarMensaje="sendAnotherUserAMessage"
  document: Document;
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  constructor(private activated:ActivatedRoute, private webService:WebSocketService) { }

  ngOnDestroy() {
  //  this._docSub.unsubscribe();
  }

  editDoc() {
    this.webService.editDocument(this.document);
  }
  
  ngOnInit(): void {
   /* this._docSub = this.webService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);*/
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
/*
  registar(){
    const id = this.activated.snapshot.params.id;
    this.webService.register(this.registro,id)
  }

  logearse(){
    const id = this.activated.snapshot.params.id;
    this.webService.login(this.login,id)
  }

  enviarMsg(){
    const id = this.activated.snapshot.params.id;
    this.webService.sendMsg(this.enviarMensaje,id)
  }

 
  loadDoc(id: string) {
    this.webService.getDocument(id);
  }

  newDoc() {
    this.webService.newDocument();
  }*/
}
