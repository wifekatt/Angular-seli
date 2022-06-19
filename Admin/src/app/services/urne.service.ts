import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UrneService {

  constructor(private httpClient : HttpClient ) { }

  postUser(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/urnes/",data);
  }

  getUser(){
    return this.httpClient.get<any>("http://localhost:3000/urnes/");
  }

  putUser(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/urnes/"+id ,data);
  }

  deleteUser(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/urnes/"+id);
  }

}

