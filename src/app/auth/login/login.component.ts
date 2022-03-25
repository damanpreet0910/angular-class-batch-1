import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  submit(){
    // alert("HELLO");
      // console.log(this.loginForm.value.email)
      if(this.loginForm.value.email=="daman@gmail.com" && this.loginForm.value.password=="123456")
      {
        this.router.navigateByUrl('/layout/dashboard')
      }
      else{
        console.log("Invalid email or password")
      }
  }

}
