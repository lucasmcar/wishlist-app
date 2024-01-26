import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';


@NgModule({
  declarations: [
    WishlistComponent,
    WishlistFormComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class WishlistModule { }
