import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LinkPipe } from './pipes/link.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LinkPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports : [
    ErrorDialogComponent,
    LinkPipe,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
