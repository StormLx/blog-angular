import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    CardModule,
    DividerModule,
  ]
})
export class SharedModule { }
