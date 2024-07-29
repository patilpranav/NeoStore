import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { preventLoginGuard } from './guards/prevent-login.guard';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent, canActivate:[preventLoginGuard]},
  { path: 'home', component: HomePageComponent, canActivate:[authGuardGuard]},
  { path: 'signup', component: SignUpComponent}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // or 'top'
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
