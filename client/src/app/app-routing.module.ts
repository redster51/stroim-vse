import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TechnologyComponent} from "./components/technology/technology.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ServicesComponent} from "./components/services/services.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', redirectTo: 'login'},
  {path: 'admin-page', component: AdminComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
