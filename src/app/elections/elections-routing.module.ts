import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionPageComponent } from './election-page/election-page.component';

const routes: Routes = [
  { path: '', component: ElectionPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionsRoutingModule { }
