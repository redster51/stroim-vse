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

const sip = 'Строим SIP';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: sip}},
  {path: 'admin', redirectTo: 'login'},
  {path: 'admin-page', component: AdminComponent, data: {title: `Страница админа | ${sip}`}},
  {path: 'projects', component: ProjectsComponent, data: {title: `Проекты | ${sip}`}},
  {path: 'technology', component: TechnologyComponent, data: {title: `Технология | ${sip}`}},
  {path: 'contacts', component: ContactsComponent, data: {title: `Контакты | ${sip}`}},
  {path: 'services', component: ServicesComponent, data: {title: `Услуги | ${sip}`}},
  {path: 'login', component: LoginComponent, data: {title: `Авторизация админа | ${sip}`}},
  {path: '**', component: NotFoundComponent, data: {title: `Страница не найдена | ${sip}`}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
