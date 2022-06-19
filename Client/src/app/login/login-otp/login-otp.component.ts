import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Electeur } from '../../class/electeur'
import { AuthService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.css']
})
export class LoginOtpComponent implements OnInit {

  electeur:Electeur = new Electeur();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  CodeFormControl = new FormControl('', [Validators.required]);
  userLogin(){
console.log(this.electeur);
this.authService.login(this.electeur).subscribe(data=>{
  alert("login successfully")
  },error=>alert("Cin or Email are not valid"));
  }

}
