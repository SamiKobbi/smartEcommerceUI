import { Injectable } from '@angular/core';
import { ICategory } from '../category';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(protected http: HttpClient) { }
  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>("http://127.0.0.1:4200/server/category/getAll")
  }
 
}
