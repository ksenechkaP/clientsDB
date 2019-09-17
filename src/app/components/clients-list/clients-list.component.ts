import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'cdb-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clientsList;
  cols;
  constructor( private clientsService: ClientsService) { }

  ngOnInit() {
     this.clientsService.getClients().subscribe(res => {
      this.clientsList = res;
    });
    this.cols = [{ field: 'name', header: 'Name' },{field: 'email', header: 'Email' }];
  }

  addUser() {

  }
}
