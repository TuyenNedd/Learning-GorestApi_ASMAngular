import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../user-comments/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentsURL = 'https://gorest.co.in/public/v2/posts';

  constructor(private httpClient: HttpClient) {}

  // Get comments by post ID
  public getCommentsByPostId(postId: number): Observable<Comment[]> {
    const url = `${this.commentsURL}/${postId}/comments`;
    console.log(url);
    return this.httpClient.get<Comment[]>(url);
  }
}
