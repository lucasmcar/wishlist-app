import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path: '', pathMatch : 'full', redirectTo: 'wishlists'
  },
  {
    path : 'wishlists', loadChildren : () => import('./wishlist/wishlist.module').then(m => m.WishlistModule)
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
