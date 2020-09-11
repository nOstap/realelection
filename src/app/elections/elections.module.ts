import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionsRoutingModule } from './elections-routing.module';
import { CandidateBoxComponent } from './candidate-box/candidate-box.component';
import { FooComponent } from './foo/foo.component';
import { ElectionPageComponent } from './election-page/election-page.component';

@NgModule({
  declarations: [CandidateBoxComponent, FooComponent, ElectionPageComponent],
  imports: [
    CommonModule,
    ElectionsRoutingModule
  ],
})
export class ElectionsModule { }
