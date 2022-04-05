import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = ''
  token
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private auth : AuthService) {
    this.baseurl = _baseurl
    this.token = this.auth.getToken()
  }

  adduser(form:any){
    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token);
    return this.http.post(this.baseurl+"/registeruser",form,{headers:header_object})
  }

}
