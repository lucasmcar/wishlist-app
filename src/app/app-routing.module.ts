import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'wishlist'},
  {path: 'wishlist', loadChildren : () => import('./wishlist/wishlist.module').then(m => m.WishlistModule)}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
