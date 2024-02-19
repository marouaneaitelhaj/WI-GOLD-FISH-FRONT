import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  visible: boolean = true;

  showDialog() {
    this.visible = true;
  }
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private AuthService: AuthService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() {
    this.AuthService.register(this.loginForm.value.username, this.loginForm.value.password);
  }
}
