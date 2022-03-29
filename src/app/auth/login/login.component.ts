import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';

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

  constructor(private router : Router, private auth : AuthService,private toastr : ToastrService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    if(this.auth.getEmail() != null)
    {
      this.router.navigateByUrl('/layout/dashboard')
    }
  }
  submit(){
    this.spinner.show()
    // alert("HELLO");
      // console.log(this.loginForm.value.email)
      if(this.loginForm.value.email=="daman@gmail.com" && this.loginForm.value.password=="123456")
      {
        this.spinner.hide()
        this.toastr.show('success','login successfully')
        this.auth.setItem(this.loginForm.value.email)
        this.router.navigateByUrl('/layout/dashboard')
      }
      else{
        this.spinner.hide()
        this.toastr.show("error","Invalid email or password")
      }
  }

}
