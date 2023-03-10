import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-u-template-driven',
  templateUrl: './u-template-driven.component.html',
  styleUrls: ['./u-template-driven.component.css']
})
export class UTemplateDrivenComponent {
  onSubmit(value: any) {
    console.log(value);
  }
}
