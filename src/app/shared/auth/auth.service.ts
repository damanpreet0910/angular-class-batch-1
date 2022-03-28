import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setItem(email:any){
    // console.log(email)
    localStorage.setItem('email',email)
  }

  public getEmail(){
   return localStorage.getItem('email')
  }

  public remove(){
    localStorage.removeItem('email')
  }
}
