import { AddNewStoreComponent } from './pages/add-new-store/add-new-store.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'secret', component: SecretPageComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'addstore', component: AddNewStoreComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  SecretPageComponent, SignUpComponent, SignInComponent, PageNotFoundComponent, IndexPageComponent, AddNewStoreComponent
]
