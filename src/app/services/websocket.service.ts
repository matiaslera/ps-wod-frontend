import { HttpClient } from '@angular/common/http';
import { CHAT_SERVER_URL } from './configuration';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import {Observable, Subscriber} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

    socket: any;
    server = CHAT_SERVER_URL
  constructor(private http: HttpClient) {
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
 
}