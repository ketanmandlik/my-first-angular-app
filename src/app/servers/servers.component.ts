import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created!';
 // serverDeletionStatus = 'Server not Deleted!';
  serverName = 'Test Server';
  serverCreated = false;
  serverHellostatus = 'No hello';
  serverHello = false;

  constructor() { 
    
    setTimeout(()=> {this.allowNewServer = true;},2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true; 
    this.serverCreationStatus = 'Server was Created!';
  }

 // theDeleteServer(){
  //  this.serverDeletionStatus = 'Server was Deleted!';
  //}


onUpdateServerName(event: Event) {
  this.serverName =(<HTMLInputElement>event.target).value;

   }
   helloServer(){
     this.serverHello = true;
     this.serverHellostatus= "Hello Server";
   }

}