import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = 'https://gorest.co.in/public-api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.get(this.postUrl).subscribe(res => {
        resolve(res);
      },
        err => {
          reject(err);
        });
    });

  }


}
