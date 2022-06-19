import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Electeur } from '../class/electeur';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:5050/api/v1/login";
  constructor(private http: HttpClient) {}

  login(electeur: Electeur):Observable<object>{
    console.log(electeur);
    return this.http.post(`${this.baseUrl}`,electeur);

  }

}

