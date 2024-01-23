import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class WishlistModule { }
