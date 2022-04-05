import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  adduserFrom = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl('')
  })
  constructor(private user : UserService, private toastr : ToastrService, private spinner: NgxSpinnerService, private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.spinner.show()
    this.user.adduser(this.adduserFrom.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.response.status)
        {
          this.toastr.success('Success!',res.response.msg)
        }
        else{
          this.toastr.error('Error!',res.response.msg)
        }
      },
      err=>{
        this.spinner.hide()
      }
    )
  }

}
