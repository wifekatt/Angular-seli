import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.electeur';
import { Electeur } from '../class/electeur';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElecteurService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/electeurs/';

  getElecteurs() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getElecteurById(electeurID: number): Observable<any> {
    return this.http.get(this.baseUrl + electeurID);
  }

  createElecteur(electeur: Electeur): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, electeur);
  }

  updateElecteur(electeurID: number, electeur: Electeur): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + electeur.electeurID, electeur);
  }

  deleteElecteur(electeurID: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + electeurID);
  }

}

