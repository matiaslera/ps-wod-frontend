import { HttpClient } from '@angular/common/http';
import { CHAT_SERVER_URL } from './configuration';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import {Observable, Subscriber} from 'rxjs'
import { Socket } from 'ngx-socket-io';
import { Document } from '../dominio/documet';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

    socket: any;
    server = CHAT_SERVER_URL
    currentDocument = this.socket2.fromEvent<Document>('document');
    documents = this.socket2.fromEvent<string[]>('documents');  
    
  constructor(private http: HttpClient,private socket2: Socket) {
    this.socket = io(this.server)
  }

  listen(eventName: String){
      return new Observable((Subscriber)=> {
          this.socket.on(eventName,(data)=> {
              Subscriber.next(data)
          })
      })
  }

  emit(eventName: String, data: any){
      this.socket.emit(eventName,data)
  }

  register(eventName: String, id: any){
    this.socket.set(eventName,id)
  }

  login(eventName: String, id: any){
    this.socket.get(eventName,id)
  }
  
  sendMsg(eventName: String, id: any){
    this.socket.to(eventName,id)
  }


  

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}