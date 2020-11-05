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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from './components/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InstallationOfVerandasComponent } from './components/installation-of-verandas/installation-of-verandas.component';
import { DesignOfVerandasComponent } from './components/design-of-verandas/design-of-verandas.component';
import { InstallationOfClosedTerracesComponent } from './components/installation-of-closed-terraces/installation-of-closed-terraces.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';

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
    InstallationOfVerandasComponent,
    DesignOfVerandasComponent,
    InstallationOfClosedTerracesComponent,
    ServiceInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
