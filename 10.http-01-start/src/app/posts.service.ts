import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  storePosts(title: string, content:string) {
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(
      'https://ng-course-atabord-default-rtdb.firebaseio.com/posts.json',
      postData, {
        observe: 'response',
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('test', 'true');
    return this.http.get<{ [key: string]: Post }>(
      'https://ng-course-atabord-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello',
        }),
        // params: new HttpParams().set('print', 'pretty'),
        params: searchParams,
      }
    ).pipe(map((responseData) => {
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      this.error.next(null)
      return postsArray;
    }), catchError(errorRes => {
      //Send to analytics server
      return throwError(errorRes);
    })
    );
  }

  deletePosts() {
    return this.http.delete('https://ng-course-atabord-default-rtdb.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'json',
    }).pipe(tap( event => {
      console.log(event);
      if(event.type === HttpEventType.Response) {
        console.log(event.body);
      }
      if(event.type === HttpEventType.Sent) {
        //...
      }
    }));
  }
}
