import { Component } from '@angular/core';
//import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
   serverId: number = 10;
   serverStatus: string = 'offline';

   constructor() {
       this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }
   
  getServerStatus(){
      return this.serverStatus;
  }

  getColor(){
      return this.serverStatus === 'online' ? 'green' : 'red ';
  }
}
