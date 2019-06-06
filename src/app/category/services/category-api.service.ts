import { Injectable } from '@angular/core';
import { ICategory } from '../category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(protected http: HttpClient) { }
  getCategory(): Observable<ICategory[]> {
    let token = localStorage.getItem('access_token');
    return this.http.get<ICategory[]>("http://127.0.0.1:4200/server/category/getAll",
     {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
  }
 
}
