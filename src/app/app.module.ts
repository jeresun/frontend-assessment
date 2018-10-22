import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewButtonComponent } from './new-button/new-button.component';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewButtonComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
