import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientComponent } from './components/edit-client-page/edit-client-page.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

const routes: Routes = [
  { path: 'client/:id', component: EditClientComponent },
  { path: 'add-client', component: EditClientComponent },
  { path: '', component: ClientsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
