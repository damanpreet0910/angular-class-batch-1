import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = ''
  token
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any, private auth: AuthService) {
    this.baseurl = _baseurl
    this.token = this.auth.getToken()
  }

  adduser(form: any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.baseurl + "/registeruser", form, { headers: header_object })
  }

  getalluser() {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.baseurl + "/getStudent", { headers: header_object });
  }

  singleuser(id: any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.baseurl + "/getStudentById/" + id, { headers: header_object });
  }

  deleteuser(id: any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.delete(this.baseurl + "/deleteStudent/" + id, { headers: header_object });
  }

  updateuser(id: any,form:any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.baseurl + "/updateStudent/" + id,form, { headers: header_object });
  }

}
