import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private user: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getuser()
  }

  alluser = []

  getuser() {
    this.spinner.show()
    this.user.getalluser().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.response.data)
        this.alluser = res.response.data
      },
      err => {
        this.spinner.hide()

      }
    )
  }


  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      //console.log(result)
      if (result.isConfirmed) {
        this.user.deleteuser(id).subscribe(
          (res: any) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getuser()
          },
          err => {
            Swal.fire(
              'Error!',
              'Try again',
              'error'
            )
          }
        )
      }
    })
  }
}
