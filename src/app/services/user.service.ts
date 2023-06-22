import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../user-in4/user';
import { Post } from '../user-posts/post';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersURL = 'https://gorest.co.in/public/v2/users';
  postsURL = 'https://gorest.co.in/public/v2/posts';

  constructor(private httpClient: HttpClient) {}

  //get all users
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersURL);
  }

  //get all user ids
  public getUserIds(): Observable<number[]> {
    return this.httpClient.get<User[]>(this.usersURL).pipe(
      map((users: User[]) => {
        return users.map((user: User) => user.id);
      })
    );
  }

  //get user by id
  public getUserById(userId: number): Observable<User> {
    const url = `${this.usersURL}/${userId}`;
    return this.httpClient.get<User>(url);
  }

  // Get posts for a specific user
  public getUserPosts(userId: number): Observable<Post[]> {
    const url = `${this.usersURL}/${userId}/posts`;
    return this.httpClient.get<Post[]>(url);
  }
}
