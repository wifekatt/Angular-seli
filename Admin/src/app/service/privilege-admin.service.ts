import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.urne';
import { PrivilegeAdmin } from '../class/privilege-admin';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeAdminService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/privilegeAdmins/';

  getPrivilegeAdmins() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPrivilegeAdminById(privilegeID: number): Observable<any> {
    return this.http.get(this.baseUrl + privilegeID);
  }

  createPrivilegeAdmin(privilegeAdmin: PrivilegeAdmin): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, privilegeAdmin);
  }

  updatePrivilegeAdmin(privilegeID: number, privilegeAdmin: PrivilegeAdmin): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + privilegeAdmin.privilegeID, privilegeAdmin);
  }

  deletePrivilegeAdmin(privilegeID: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + privilegeID);
  }

}

