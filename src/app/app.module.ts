import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientsComponent } from './clients/clients.component';
import {ClientService} from './clients/client.service';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import localeHe from '@angular/common/locales/he';
import { PaginatorComponent } from './paginator/paginator.component';
registerLocaleData( localeHe, 'he' );

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directives', component: DirectiveComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/page/:page', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent,
    FormComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientService,
    { provide: LOCALE_ID, useValue: 'en-US'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
