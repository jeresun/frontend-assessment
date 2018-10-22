import { Injectable } from '@angular/core';
import { contacts } from '../example-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Object[] {
    return contacts;
  }
}
