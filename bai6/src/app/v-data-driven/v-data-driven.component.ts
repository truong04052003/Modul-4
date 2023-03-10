import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-v-data-driven',
  templateUrl: './v-data-driven.component.html',
  styleUrls: ['./v-data-driven.component.css']
})
export class VDataDrivenComponent {
  formProfile!: FormGroup;
  ngOnInit() {
    this.formProfile = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    })
  }
  onSubmitForm() {
    console.log(this.formProfile?.value);

  }
}
