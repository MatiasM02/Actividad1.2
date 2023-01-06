import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrosQueryPageRoutingModule } from './parametros-query-routing.module';

import { ParametrosQueryPage } from './parametros-query.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrosQueryPageRoutingModule
  ],
  declarations: [ParametrosQueryPage]
})
export class ParametrosQueryPageModule {}
