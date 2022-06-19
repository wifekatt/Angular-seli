import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatApiService {

  constructor(private httpClient : HttpClient ) { }

  postcandidat(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/candidat/",data);
  }

  getcandidat(){
    return this.httpClient.get<any>("http://localhost:3000/candidat/");
  }

  putcandidat(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/candidat/"+id ,data);
  }

  deletecandidat(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/candidat/"+id);
  }
}
