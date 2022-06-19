import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.candidatList';
import { ListCandidat } from '../class/list-candidat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatListService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/listCandidats/';

  getListCandidats() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getListCandidatById(listID: number): Observable<any> {
    return this.http.get(this.baseUrl + listID);
  }

  createListCandidat(listCandidat: ListCandidat): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, listCandidat);
  }

  updateListCandidat(listID: number, listCandidat: ListCandidat): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + listCandidat.listID, listCandidat);
  }

  deleteListCandidat(listID: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + listID);
  }

}
