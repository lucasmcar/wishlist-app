import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  {path : '', component : WishlistComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
