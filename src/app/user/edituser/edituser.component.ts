import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  updateuserFrom = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl('')
  })

  id : any
  constructor(private user : UserService, private toastr : ToastrService, private spinner: NgxSpinnerService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.edit()
  }

  edit(){
    this.spinner.show()
    this.user.singleuser(this.id).subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.updateuserFrom.patchValue({name : res.response.data.name})
        this.updateuserFrom.patchValue({email : res.response.data.email})
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  submit(){
    this.spinner.show()
    this.user.updateuser(this.id,this.updateuserFrom.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.response.status)
        {
          this.toastr.success('Success!',res.response.msg)
        }
        else{
          this.toastr.error('Error!',res.response.msg)
        }
        this.router.navigateByUrl('/layout/listuser')
      },
      err=>{
        this.spinner.hide()
      }
    )
  }
}
