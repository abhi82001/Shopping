import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ReturnsComponent } from './returns/returns.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component:SignInComponent },
  
  { path: 'returns', component:ReturnsComponent },
  { path: 'cart', component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
