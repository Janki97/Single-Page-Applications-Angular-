import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateRangePipe } from './date-range.pipe';
import { FeedbackComponent } from './feedback.component';



@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedbackComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
