import { MyStoreService } from './services/my-store.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { IndexService } from './services/index.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NotifierModule} from "angular-notifier";

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthGuard } from './auth.guard';
import { StoreCreatedComponent } from './components/store-created/store-created.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RoutingComponents,
    StoreCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IndexService, AuthService, MyStoreService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
