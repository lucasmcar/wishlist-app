import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishRoutingModule } from './wish-routing.module';
import { WishComponent } from './wish/wish.component';


@NgModule({
  declarations: [
    WishComponent
  ],
  imports: [
    CommonModule,
    WishRoutingModule
  ]
})
export class WishModule { }
