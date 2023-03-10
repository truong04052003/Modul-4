import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formProfile!: FormGroup;
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  ngOnInit() {
    this.formProfile = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'confirmpassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'country': new FormControl('', [
        Validators.required,
      ]),
      'age': new FormControl('', [
        Validators.required,
        Validators.min(18),
      ]),
      'gender': new FormControl('', [
        Validators.required,
      ]),
      'phone': new FormControl('', [
        Validators.required,
        Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$"),
      ])
    })
  }
  onSubmitForm() {
    console.log(this.formProfile?.value);

  }
  checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw === cpw) {
      this.passwordsMatching = true;
    } else {
      this.passwordsMatching = false;
    }
  }
}
