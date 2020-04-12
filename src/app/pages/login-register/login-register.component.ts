import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  //ตัวแปร / properties
  message:string = "Hello Angular";

  //ตัวแปร object
  profile = {
    "name":"Narumon",
    "tel":"0622926144",
    "gender":"Female"
  }

  //2 ways data binding
  userData={
    "email":"",
    "password":""

  }


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    //alert("Hey Angular");
    if(this.userData.email == "n.saipom@gmail.com" && this.userData.password == "1234"){
      alert("Login Success");
    this.router.navigate(['backend']);
    }else{
      alert("Login Fail");
    }
  }

}
