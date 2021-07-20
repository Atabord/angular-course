import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signupForm: NgForm

  onSubmit() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('your form is invalid');
    }
  }
}
