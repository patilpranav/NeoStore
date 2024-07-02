import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { preventLoginGuard } from './guards/prevent-login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent, canActivate:[preventLoginGuard]},
{ path: 'home', component: HomePageComponent, canActivate:[authGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
