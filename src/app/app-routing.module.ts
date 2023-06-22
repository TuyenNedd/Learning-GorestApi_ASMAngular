import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserIn4Component } from './user-in4/user-in4.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: UserIn4Component,
  },
  { path: 'user-in4', component: UserIn4Component },
  { path: 'user-posts', component: UserPostsComponent },
  { path: 'user-posts/:id', component: UserPostsComponent },
  { path: 'user-comments', component: UserCommentsComponent },
  { path: 'user-comments/:id', component: UserCommentsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // constructor(private service: UserPostsComponent) {}
  // ngOnInit() {}
  // redirect() {
  //   this.service.navigate(['/user-posts']);
  // }
}
