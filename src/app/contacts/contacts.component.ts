import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Object[];
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  
  getContacts():void {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(contact) {
    for(var i=0;i<this.contacts.length;i++) {
      if(contact===this.contacts[i]) {
        this.contacts.splice(i,1);
      }
    }
  }
  
  addContact(contact) {
    this.contacts.push(contact);
  }
}
