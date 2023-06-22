import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../user-in4/user';
import { Post } from '../user-posts/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsURL = 'https://gorest.co.in/public/v2/posts';

  constructor(private httpClient: HttpClient) {}

  // Get posts by user ID
  public getPostsByUserId(userId: number): Observable<Post[]> {
    const url = `${this.postsURL}/?user_id=${userId}`;
    console.log(url);
    return this.httpClient.get<Post[]>(url);
  }
}
