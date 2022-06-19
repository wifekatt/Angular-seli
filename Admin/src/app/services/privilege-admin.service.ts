import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrivilegeAdminService {

  constructor(private httpClient : HttpClient ) { }

  postUser(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/privilege/",data);
  }

  getUser(){
    return this.httpClient.get<any>("http://localhost:3000/privilege/");
  }

  putUser(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/privilege/"+id ,data);
  }

  deleteUser(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/privilege/"+id);
  }

}

