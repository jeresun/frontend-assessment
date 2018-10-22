import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('newContact') newContactWindow: NewContactComponent;
  @ViewChild('contactList') contactList: ContactsComponent;
  
  title = 'contacts';
  
  openNewContactWindow() {
    this.newContactWindow.show();
  }
  
  addNewContact(event) {
    this.contactList.addContact(event.newContact);
  }
  
  ngAfterViewInit() {
    
  }
}
