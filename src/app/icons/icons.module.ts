import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconEdit, IconDelete } from 'angular-feather';

const icons = [
  IconEdit,
  IconDelete
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[icons]
})
export class IconsModule { }
