import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginService } from 'src/app/shared/auth/login.service';

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

  constructor(private router : Router, private auth : AuthService,private toastr : ToastrService,private spinner : NgxSpinnerService, private login : LoginService) { }

  ngOnInit(): void {
    if(this.auth.getEmail() != null)
    {
      this.router.navigateByUrl('/layout/dashboard')
    }
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }
  submit(){
    this.spinner.show()
    this.login.login(this.loginForm.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log("if stmt work" +res)
        if(res.response.status)
        {
          this.auth.setItem(res.response)
          this.toastr.success('Login Successfully','success')
          this.router.navigateByUrl("/layout/dashboard")
        }else{
          this.toastr.error('Error!',res.response.msg)
        }
      },
      err=>{
        this.spinner.hide()
        // console.log("else statement works" + err)
      }
    )
  }

}
