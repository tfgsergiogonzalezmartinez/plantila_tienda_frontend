import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Layout/LoginLayout/LoginLayout.component';
import { MainLayoutComponent } from './Layout/MainLayout/MainLayout.component';
import { LoginPageComponent } from './Pages/LoginPage/LoginPage.component';
import { loginGuard } from '../../Guards/Login.guard';
import { MainPageComponent } from './Pages/MainPage/MainPage.component';
import { UserPageComponent } from './Pages/UserPage/UserPage.component';


const routes: Routes = [
  {path: 'login', component: LoginLayoutComponent, children:[
    { path: '', component: LoginPageComponent}]
  },
  {path: 'home', component: MainLayoutComponent, children:[
    { path: 'settings', canActivate: [loginGuard], component: UserPageComponent },
    { path: '', component: MainPageComponent }]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
