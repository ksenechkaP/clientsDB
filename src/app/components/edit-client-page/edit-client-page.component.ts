import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'cdb-edit-client',
  templateUrl: './edit-client-page.component.html',
  styleUrls: ['./edit-client-page.component.scss']
})
export class EditClientComponent implements OnInit {
  form: FormGroup;
  client: Client = {
    id: null,
    name: null,
    email: null
  };
  id: string;

  constructor(private clientsService: ClientsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required])
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.clientsService.getClientById(this.id).subscribe(res => {
       this.client = res;
       this.form.get('name').setValue(this.client.name);
       this.form.get('email').setValue(this.client.email);
     });
   }
  }

  onSubmit() {
    const {name, email} = this.form.value;
    if (this.id) {
      const client = new Client(+this.id, email, name);
      console.log(client);
      this.clientsService.updateClient(client);
    } else {
      const id = Math.floor(Math.random() * Math.floor(100));
      const client = new Client(+this.id, email, name);
      this.clientsService.createNewClient(client);
    }
  }

  deleteClient() {
    this.clientsService.deleteClient(this.id);
  }
}
