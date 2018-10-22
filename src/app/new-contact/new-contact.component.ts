import { Component, OnInit, Renderer, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  @Output()
  onNewContact: EventEmitter<Object> = new EventEmitter<Object>();
  closeResult = '';
  
  newContact = {
    name: '',
    phone: '',
    email: '',
    imgId: 0
  };

  constructor(private renderer: Renderer,private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  addContact() {
    this.newContact.imgId = Math.floor(Math.random() * 10);
    this.onNewContact.emit(this.newContact);
    //this.hide();
  }
  
  show() {
    this.resetForm();
    
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }
  
  hide() {
    //$('#newContactModal').modal('hide');
  }
  
  resetForm() {
    this.newContact = {
      name: '',
      phone: '',
      email: '',
      imgId: 0
    }
  }

}
