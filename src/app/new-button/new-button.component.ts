import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent implements OnInit {
  @Output()
  newContactClick: EventEmitter<String> = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick():void {
    this.newContactClick.emit();
  }
}
