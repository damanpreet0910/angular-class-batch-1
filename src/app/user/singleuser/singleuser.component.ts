import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private user: UserService, private route: ActivatedRoute) { }
  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    // console.log(this.id)
    this.getuser()
  }
  singleuser : any
  getuser() {
    this.spinner.show()
    this.user.singleuser(this.id).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.response.data)
        this.singleuser = res.response.data
      },
      err => {
        this.spinner.hide()
      }
    )
  }
}
