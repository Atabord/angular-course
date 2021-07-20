import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public projectStatus = ['Stable', 'Critical', 'Finished'];
  public projectForm: FormGroup;
  private forbiddenProjectNames = ['Test']

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenNamesAsync.bind(this)),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'projectStatus': new FormControl(this.projectStatus[0]),
    });
  }

  onSubmit() {
    console.log(this.projectForm.status)
    console.log(this.projectForm.value);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if(this.forbiddenProjectNames.includes(control.value)) {
      return { 'nameIsForbidden' : true };
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<{ [s: string]: boolean }> | Observable <{ [s: string]: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(this.forbiddenProjectNames.includes(control.value)) {
          resolve({ 'nameIsForbidden' : true });
        }
        resolve(null);
      }, 600);
    });
  }
}
