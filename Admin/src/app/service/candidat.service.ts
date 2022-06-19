import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.candidat';
import { Candidat } from '../class/candidat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/candidats/';

  getCandidats() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCandidatById(candidatID: number): Observable<any> {
    return this.http.get(this.baseUrl + candidatID);
  }

  createCandidat(candidat: Candidat): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, candidat);
  }

  updateCandidat(candidatID: number, candidat: Candidat): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + candidat.candidatID, candidat);
  }

  deleteCandidat(candidatID: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + candidatID);
  }

}
