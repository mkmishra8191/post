import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './shared/login/login.component';
import { ResetComponent } from './shared/reset/reset.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [{path:'', redirectTo:'/blog', pathMatch: 'full'},
  
  { path: 'blog', component: PostListComponent },
{ path: 'blog/:id', component: PostDetailComponent },
{ path: 'dashboard', component: PostDashboardComponent },
{ path: 'login', component: LoginComponent },
{ path: 'reset', component: ResetComponent },
{ path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostDashboardComponent, PostDetailComponent,PostListComponent, NavbarComponent,LoginComponent,ResetComponent, RegisterComponent]
