import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[HttpService]
})
export class LoginComponent  {

  loginForm = new FormGroup({
    phone: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(protected http: HttpService) {}
  async onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    let ret: any;
    if(this.loginForm.value) {
      ret = await this.http.Post('http://localhost:8210/login', this.loginForm.value);
    }
    if (ret.error) {
      return null;
    }
    console.warn(ret);
  }
}
