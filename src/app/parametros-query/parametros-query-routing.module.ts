import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrosQueryPage } from './parametros-query.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrosQueryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosQueryPageRoutingModule {}
