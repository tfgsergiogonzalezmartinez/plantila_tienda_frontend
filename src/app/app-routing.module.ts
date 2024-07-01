import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Layout/LoginLayout/LoginLayout.component';
import { MainLayoutComponent } from './Layout/MainLayout/MainLayout.component';
import { LoginPageComponent } from './Pages/LoginPage/LoginPage.component';
import { loginGuard } from '../../Guards/Login.guard';
import { MainPageComponent } from './Pages/MainPage/MainPage.component';


const routes: Routes = [
  {path: 'login', component: LoginLayoutComponent, children:[
    {path: '', component: LoginPageComponent}]
  },
  {path: 'home', component: MainLayoutComponent, children:[
    {path: '', component: MainPageComponent }]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
