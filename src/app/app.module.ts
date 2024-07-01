import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/Header/Header.component';
import { HeaderDesplegableComponent } from './Components/HeaderDesplegable/HeaderDesplegable.component';
import { MainLayoutComponent } from './Layout/MainLayout/MainLayout.component';
import { LoginLayoutComponent } from './Layout/LoginLayout/LoginLayout.component';
import { LoginPageComponent } from './Pages/LoginPage/LoginPage.component';
import { MainPageComponent } from './Pages/MainPage/MainPage.component';
import { UserProfileDropdownComponent } from './Components/UserProfileDropdown/UserProfileDropdown.component';
import { ToggleModeComponent } from './Components/ToggleMode/ToggleMode.component';
import { ItemComponent } from './Components/Item/Item.component';
import { SubHeaderComponent } from './Components/SubHeader/SubHeader.component';
import { CarritoComprasComponent } from './Components/CarritoCompras/CarritoCompras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDesplegableComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LoginPageComponent,
    MainPageComponent,
    UserProfileDropdownComponent,
    ToggleModeComponent,
    ItemComponent,
    SubHeaderComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
