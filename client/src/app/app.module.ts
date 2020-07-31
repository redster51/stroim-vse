import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ServicesComponent} from './components/services/services.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './components/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProjectsComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
    TechnologyComponent,
    ContactsComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
