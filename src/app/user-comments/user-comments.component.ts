import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss'],
})
export class UserCommentsComponent implements OnInit {
  @Input() postId: number | undefined;
  comments: Comment[] = [];
  selectedPostComments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const commentId = +this.route.snapshot.params['id'];
    if (commentId) {
      this.getCommentsByCommentId(commentId);
    }
  }

  getCommentsByCommentId(commentId: number): void {
    this.commentService.getCommentsByPostId(commentId).subscribe((comments) => {
      this.comments = comments;
    });
  }

  showCommentsOnPost(postId: number) {
    this.commentService.getCommentsByPostId(postId).subscribe((comments) => {
      this.selectedPostComments = comments;
    });
  }
}
