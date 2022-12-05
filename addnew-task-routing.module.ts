import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewTaskPage } from './addnew-task.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewTaskPageRoutingModule {}
