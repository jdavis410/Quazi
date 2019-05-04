import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatChipsModule],
  exports: [MatButtonModule, MatChipsModule],
})
export class AngularMaterialModule { }
