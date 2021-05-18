 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ReturnsComponent } from './returns/returns.component';
import { SignInComponent } from './user/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'returns', component:ReturnsComponent },
  { path: 'cart', component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
