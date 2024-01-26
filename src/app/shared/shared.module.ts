import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LinkPipe } from './pipes/link.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LinkPipe
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports : [
    ErrorDialogComponent,
    LinkPipe
  ]
})
export class SharedModule { }
