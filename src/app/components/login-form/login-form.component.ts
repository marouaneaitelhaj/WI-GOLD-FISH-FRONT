import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  visible: boolean = true;

  showDialog() {
    this.visible = true;
  }
  loginForm : FormGroup;
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() {
    
  }
}
