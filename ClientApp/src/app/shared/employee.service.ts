import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData : Employee;
  list :Employee[];

  constructor(private http : HttpClient) { }

  postEmployee(formData : Employee){
   return this.http.post(environment.apiURL +'/Employee',formData);
  }

  refreshList(){
    this.http.get(environment.apiURL +'/Employee')
    .toPromise().then(res=>this.list = res as Employee[]);
  }
}
