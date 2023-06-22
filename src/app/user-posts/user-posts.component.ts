import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';
import { Post } from './post';
import { User } from './user';
import { Comment } from '../user-comments/comment';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  providers: [UserService, PostService, CommentService],
})
export class UserPostsComponent implements OnInit {
  user: User | undefined;
  posts: Post[] = [];
  comments: Comment[] = [];
  selectedPostComments: Comment[] = [];
  selectedPostId: number | null = null; //để lưu trữ bài đăng được chọn
  isCommentOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    const userId = +this.route.snapshot.params['id'];
    if (userId) {
      this.userService.getUserById(userId).subscribe((user) => {
        this.user = user;
        this.getPostsByUserId(userId);
      });
    }
    // Lấy dữ liệu bài đăng
    this.posts = []; // Khởi tạo hoặc lấy dữ liệu bài đăng

    // Lấy dữ liệu bình luận
    this.comments = []; // Khởi tạo hoặc lấy dữ liệu bình luận
  }

  getPostsByUserId(userId: number): void {
    this.postService.getPostsByUserId(userId).subscribe((posts) => {
      this.posts = posts;
    });
  }

  showComments(postId: number) {
    this.router.navigate(['user-comments', postId]);
  }

  goToComments(postId: number): void {
    this.router.navigate(['comments', postId], { relativeTo: this.route });
  }

  showCommentsOnPost(postId: number) {
    if (this.selectedPostId !== postId) {
      this.selectedPostId = postId;
      this.isCommentOpen = true;
      this.commentService.getCommentsByPostId(postId).subscribe((comments) => {
        this.selectedPostComments = comments;
      });
    } else {
      this.isCommentOpen = !this.isCommentOpen;
    }
  }

  toggleLike(post: Post): void {
    post.liked = !post.liked;
  }
  toggleCmt(post: Post): void {
    post.commented = !post.commented;
  }
  toggleShare(post: Post): void {
    post.shared = !post.shared;
  }
}
