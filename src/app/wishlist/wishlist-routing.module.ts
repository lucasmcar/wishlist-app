import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistResolverResolver } from './resolver/wishlist-resolver.resolver';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  {path : '', component : WishlistComponent},
  {path : 'new', component : WishlistFormComponent, resolve : {
    wishlist : WishlistResolverResolver}
  },
  {path : 'edit/:id', component : WishlistFormComponent, resolve : {
    wishlist : WishlistResolverResolver}
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
