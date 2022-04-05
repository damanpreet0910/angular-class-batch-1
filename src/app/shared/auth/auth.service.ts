import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setItem(response:any){
    // console.log(email)
    localStorage.setItem('email',response.data.email)
    localStorage.setItem('token',response.token)
  }

  public getEmail(){
   return localStorage.getItem('email')
  }
  public getToken(){
   return localStorage.getItem('token')
  }

  public remove(){
    localStorage.removeItem('email')
    localStorage.removeItem('token')
  }
}
