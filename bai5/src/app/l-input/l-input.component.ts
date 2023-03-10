import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-l-input',
  templateUrl: './l-input.component.html',
  styleUrls: ['./l-input.component.css']
})
export class LInputComponent {
  @Input('title') title: any;
  @Output('GateOne') GateOne = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.title);
  }
  handleClick() {
    // alert('handleClick');
    this.GateOne.emit(this.title)
  }
}
