import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { Post } from '../user-posts/post';

@Component({
  selector: 'app-user-in4',
  templateUrl: './user-in4.component.html',
  styleUrls: ['./user-in4.component.scss'],
})
export class UserIn4Component implements OnInit {
  users: User[] = [];
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users: User[]) => (this.users = users));
  }
  navigateToUserPosts(userId: number): void {
    this.userService.getUserPosts(userId).subscribe((posts: Post[]) => {
      if (posts && posts.length > 0) {
        this.router.navigate(['user-posts', userId]);
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }

  faSearch = faSearch;
}
