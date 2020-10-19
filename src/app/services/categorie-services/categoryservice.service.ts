import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categories } from '../../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private categoryUrl = 'https://gorest.co.in/public-api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.get(this.categoryUrl).subscribe(res => {
        resolve(res);
      },
        err => {
          reject(err);
        });
    });

  }

}
