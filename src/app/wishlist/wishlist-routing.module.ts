import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  {path : '', component : WishlistComponent},
  {path : 'new', component : WishlistFormComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
