import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Client } from '../models/client.model';

@Injectable()

export class ClientsService {
  clientUrl = 'http://localhost:3000/clients';

  constructor( private httpClient: HttpClient) {

  }

  getClients() {
     return this.httpClient.get('http://localhost:3000/clients');
  }

  getClientById(clientId: string): Observable<Client> {
    return this.httpClient.get<Client>(this.clientUrl + '/' + clientId);
  }

  createNewClient(client: Client) {
    return this.httpClient.post<Client>('http://localhost:3000/clients', client).subscribe(
        val => {
            console.log("PUT call successful value returned in body",
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  updateClient(client: Client) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    return this.httpClient.put<Client>(this.clientUrl + '/' + client.id, client, httpOptions).subscribe(
        val => {
            console.log("PUT call successful value returned in body",
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
    }

  deleteClient(id) {
    return this.httpClient.delete<void>(this.clientUrl + '/' + id).subscribe(
        val => {
            console.log("PUT call successful value returned in body",
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }
}
