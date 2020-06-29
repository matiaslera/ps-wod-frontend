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
    //currentDocument = this.socket2.fromEvent<Document>('document');
    //documents = this.socket2.fromEvent<string[]>('documents');  
    registro= "registerUser"
    loginUser = "loginUser"
    enviarMensaje="sendAnotherUserAMessage"
  constructor(private http: HttpClient,private socket2: Socket) {
    this.socket = io(this.server)
  }
  //en uso
  listen(eventName: String){
      return new Observable((Subscriber)=> {
          this.socket.on(eventName,(data)=> {
              Subscriber.next(data)
          })
      })
  }
  //usando
  emit(eventName: String, data: any){
      this.socket.emit(eventName,data)
  }

  register( id: any){
    this.socket.set(this.registro,(data)=> {
      data.name="matias"
      data.mensaje="hola"
  })
  }

  login( id: any){
    this.socket.get(this.loginUser,(data)=> {
    })
  }
  
  enviarMsg(eventName: String, id: any){
    this.socket.to(eventName,id)
  }


  
/*
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
  }*/
}